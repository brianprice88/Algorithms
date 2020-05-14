// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets: '{]' === false
// Open brackets must be closed in the correct order. '[{]}' === false

var validParentheses = function(str) {
let stack = [];
for (var i = 0; i < str.length; i++) {
  let char = str[i];
  if (char === '(' || char === '{' || char === '[') { // for an opening parens, add it to the end of the stack
    stack.push(char)
  } else {
    let previous = stack.pop(); // for a closing parens, take the value off top of the stack and check if it matches the closing parens
    if (char === ')' && previous !== '(') {return false}
    if (char === '}' && previous !== '{') {return false}
    if (char === ']' && previous !== '[') {return false}
  }
}
return stack.length === 0 // check at the end that there were an equal number of opening/closing parens
}