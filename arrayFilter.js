

/*

Consider an array/list of sheep where some sheep may be 
missing from their place. We need a function that counts
the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]

The correct answer would be 17.

*/

function countSheep(sheepArray) {
    const presentSheep = sheepArray.filter(sheep => sheep === true);
    return presentSheep.length;
  }
  

// Use the filter method of arrays to return a new array 
// containing only the true values, and then get the length of that array: