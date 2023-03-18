function validParentheses(parenStr) {
  let stack = [];

  for (let i = 0; i < parenStr.length; i++) {
    let char = parenStr[i];
    if (char === '(') {
      stack.push(char);
    } else if (char === ')') {
      if (stack.length === 0) {
        return false;
      } else {
        stack.pop();
      }
    }
  }

  return stack.length === 0;
}

/*
First, the function initializes an empty stack stack to store 
opening parentheses.

Then, it iterates over each character in the input string parenStr.
For each character:

If it is an opening parenthesis, push it onto the stack.

If it is a closing parenthesis, check if the stack is empty. 
If it is, return false because this means there is no opening
parenthesis to match the current closing parenthesis. 

If the stack is not empty, pop the last element from the stack 
and check if it matches the current closing parenthesis. 

If the popped element does not match the current closing 
parenthesis, return false.

After iterating over all the characters in the input string, 
check if the stack is empty. If the stack is empty, return 
true because this means all opening parentheses have been 
matched with closing parentheses. If the stack is not 
empty, return false because this means there is an opening
parenthesis without a matching closing parenthesis.
*/
