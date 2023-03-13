/* Your task is to make a function that can take any non-negative 
integer as an argument and return it with its digits in 
descending order. Essentially, rearrange the digits to create 
the highest possible number.*/


function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
  }


/* 
parseInt(String(n)): The function first converts the integer (n) 
into a string so that its digits can be manipulated.

The use of n is just a convention, and any valid variable name 
could be used instead. Typically, 'n' is used to represent an 
integer input in JS. 

The function parseInt is used to convert a string representation 
of a number to an actual number data type in JavaScript. The String 
function is used to convert the integer n to its string 
representation. 

The combination of these two functions, parseInt(String(n)), is 
used to make sure that n is a string before being passed to 
the split method.

.split(''): The split() method is then used to split the string 
into an array of its individual characters.

.sort(): The sort() method sorts the array of characters in 
ascending order.

.reverse(): The reverse() method is used to reverse the order 
of the characters in the array, resulting in a descending order.

.join(''): The join() method is then used to concatenate the 
characters in the array back into a string.

return parseInt(String(n).split('').sort().reverse().join('')): 
Finally, the function returns the result of converting the 
concatenated string back into an integer.  
  
*/

