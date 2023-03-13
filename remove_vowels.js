

function disemvowel(str) {
  return str.replace(/[aeiou]/gi,'');
};

/* the replace method is using a regular expression 
denoted by the /[]/
the 'gi' stands for global and case insenstive
so all instances of the vowels will be replaced
by the empty string '' 
*/