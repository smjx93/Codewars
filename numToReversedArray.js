/*
Convert number to reversed array of digits
Given a random non-negative number, you have to 
return the digits of this number within an array 
in reverse order.

Example

(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]
*/


function reverseDigits(number) {
    // Convert the number to a string and split it 
    // into an array of its individual digits
    const digits = number.toString().split('');
  
    // Reverse the array of digits and convert each 
    // digit back to a number
    return digits.reverse().map(digit => parseInt(digit, 10));
  }


