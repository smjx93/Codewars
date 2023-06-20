
function filter_list(l) {
  // Return a new array with the strings filtered out

  return l.filter(item => typeof item === 'number');
}
// An arrow function (item => typeof item === 'number') 
// is used as the filtering condition. This arrow function 
// checks the typeof each item in the array. 
// If the typeof the item is equal to 'number', it means 
// the item is a number, and it will be included in the filtered array.