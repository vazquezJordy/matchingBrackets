let isMatchingBrackets = function(string) {
    string = string.replace(/\w/g, '')
    string = string.replace(/\s/g, '')
    
    let stack = [];
    let map = {
        '(': ')',
        '[': ']',
        '{': '}',
        '<': '>'
    }
    
    
    for (let i = 0; i < string.length; i++) {
      console.log(stack)
        if (string[i] === '(' || string[i] === '{' || string[i] === '[' || string[i] === '<'){
            stack.push(string[i]);
        }
        else {
            let last = stack.pop();

            if (string[i] !== map[last]) {
                return false;
            };
        }
    }

    if (stack.length !== 0) {
        return false;
    };
    return true;
}



var string = '{{([]}'

isMatchingBrackets(string);