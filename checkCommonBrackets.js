let matchingBrackets = function (str) {
    var openAndClose = {'{':'}'};
    var stack = [];
    str = str.replace(/[a-zA-Z0-9\s\?\\\*\&\^\$\#\@\!]/g, '')

    for (i=0; i < str.length; i++) {

        if (str[i] === '{') {
            stack.push(str[i]);
            console.log(str[i])
        }else {
            let last = stack.pop();
            if(str[i] != openAndClose[last]) {
                console.log(str[i])
                return false
            };
        }
    }
    if (stack.length !==0) {
        return false;
    }
    return true;
}

console.log(matchingBrackets('{asdfasdf}'))