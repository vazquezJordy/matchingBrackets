let matchingBrackets = function (str) {
var openAndClose = {'{':'}'};
var stack = [];
var text = [];

for (i=0; i < str.length; i++) {

    if (str[i] !== '{'|| '}') {
        text.push(str[i])
    }

    else if (str[i] === '{') {
        stack.push(str[i]);
        
    }else {
        let last = stack.pop();
        if(str[i] != openAndClose[last]) {
            return false
        };
    } 
    
}

if (stack.length !==0) {
    return false;
}
return true;
}

console.log(matchingBrackets('{asd{fasdf}'))