/* Remove the first and last characters of a string. 
You're given one parameter, the original string. 
You don't have to worry with strings with less 
than two characters.*/



function removeChar(str){
  return str.slice(1, -1)
}


/* In this solution, we use the slice() method to remove the 
first and last characters of the given string. 
The slice() method takes two arguments: the starting index(1)
and the ending index (-1) of the slice which is like doing
.length(-1)



In this case, we pass in 1 as the starting index to skip the first 
character of the string, and -1 as the ending index to exclude
the last character of the string. We then return the resulting 
string with the first and last characters removed.


Note that this solution assumes that the input string has at 
least two characters. If the input string has only one character 
or no characters, the resulting string will be an empty string. 
You may want to add additional error handling if needed. */