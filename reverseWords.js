/* Complete the function that accepts a string parameter, 
and reverses each word in the string. 
All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps" 
 
*/
function reverseWords(str) {
  // Split the string into an array of words
  let words = str.split(' ');

  // Reverse each word in the array
  let reversedWords = words.map(word => {
    // Convert the word to an array of characters, reverse it, and join it back to a string
    return word.split('').reverse().join('');
  });

  // Join the reversed words array back to a string, using spaces to separate them
  return reversedWords.join(' ');
}