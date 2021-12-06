// (?<=[{}]{|})
//ALL these expressions work
// contains a pair of curlys
var matchingBrackets = /({})/g
var checkingExtraCurlies = /((?<={){})|(?<=({})})/
var eitherOr = /\{\{([^\{\}]*)\}|\{([^\{\}]*)\}\}/
var insideW = /\{([\w])([^\{\}\b]*)\}/

//end of working expressions

// noMatch does not contain a pair of curly brackets
var noMatch = /([^{}])/

// double curlys
var beforeCurlys = /((?<={){})/
var afterCulys = /(?<=({})})/

var notCurlyes = /[a-z]|[A-Z]/
var matchCurlyBrackets = /\{([^\}]*)\}/




function checkForBrakets(string) {	
    if (matchingBrackets.exec(string) && !string.match()){
        return true;
    } 
	  else {
        return false;
    }
    
}

var str = "{} {} {} "
var test1 = /\{(?!{)/
str.replace()


//console.log(test1.exec(str))

console.log(checkForBrakets(str))

//var checkingExtraCurlies = /((?<={){})|(?<=({})})/
// //console.log(str.match(beforeCurlys, afterCulys))

//  /([A-Z])\w+/

//  /([{}])/
//string.match("{{") && !string.match("}}")

/*let bracketCheck = {
    letMatch = (string) =>{
        var matchingBrackets = /({})/g
        if (string.match(matchingBrackets)){
            return true
        }else {
            return false
        }
    }
        
};

bracketCheck.letMatch(str);
*/

let map = {
    '(': ')'
}