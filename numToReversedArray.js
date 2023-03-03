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

function digitize(n){
  function reverseDigits(number) {
    // Convert the number to a string and split it 
    // into an array of its individual digits
    const digits = number.toString().split('');
  
    // Reverse the array of digits and convert each 
    // digit back to a number
    return digits.reverse().map(digit => parseInt(digit, 10));
  }

  return reverseDigits(n);
}

/* 
The parseInt(digit, 10) function call is used to parse into integers
i.e. convert each digit, which is currently a string, back to a number.

The parseInt() function takes two arguments - 
1. the string to be converted to a number
2. the radix, which specifies the number base 
of the string. In this case, base 10 (decimal).
*/