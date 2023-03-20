/* Complete the solution so that it returns 
true if the first argument(string) passed 
in ends with the 2nd argument (also a string).

eg. 
solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false */


function solution(str, ending) {
  return str.endsWith(ending);
}


/* The .endsWith method checks whether the given string 
ends with the characters of the specified string,
and returns true or false accordingly.

By calling the endsWith method on the 
str parameter, passing in the ending parameter as 
an argument, and return the result. 

If str ends with ending, the method returns true,
otherwise it returns false. */