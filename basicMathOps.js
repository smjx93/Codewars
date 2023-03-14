function basicOp(operation, value1, value2) {
  switch(operation) {
    case '+':
      return value1 + value2;
    case '-':
      return value1 - value2;
    case '*':
      return value1 * value2;
    case '/':
      return value1 / value2;
    default:
      return null;
  }
}
/*  This function takes three arguments - operation (a string or 
character representing the mathematical operator), value1 (a number
representing the first value), and value2 (a number representing 
the second value). 

The function uses a switch statement to determine which operation
to perform based on the value of operation, and then returns the
result of applying the chosen operation to value1 and value2. 

If the operation argument is not one of the supported operators 
(+, -, *, /), the function returns null.  */

