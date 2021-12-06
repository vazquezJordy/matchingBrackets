var matchingBrackets = /({})/g
var checkingExtraCurlies = /((?<={){})|(?<=({})})/
//var checksForExtraBrackets = /\{\{{1}([^\}]*)\}|\}\}([^\{]*)\{/
var eitherOr = /\{\{([^\{\}]*)\}|\{([^\{\}]*)\}\}/
// this can be used for further unit testing. 
var checksForLetteringWithBrackets = /\{([\w]*)\{([^\{\}\b]*)\}/

function checkForBrakets(string) {	
    if (a){
        return true;
    } else {
		return "There is something wrong"
	}
}

var str = "{}}{";
checkForBrakets(str);