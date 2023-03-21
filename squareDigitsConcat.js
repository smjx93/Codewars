/* You are asked to square every digit of a number and concatenate them. 
Eg. 9119 through the function will return 811181. 
Because 9*9 is 81 and 1*1 is 1. (81-1-1-81) */ 

function squareDigits(num) {
  // Convert number to string
  const numString = num.toString();

  // Initialize result string
  let result = '';

  // Loop through each character in the string
  for (let i = 0; i < numString.length; i++) {
    // Convert character to number and square it
    const digitSquared = Math.pow(Number(numString[i]), 2);

    // Add squared digit to result string
    result += digitSquared.toString();
  }

  // Convert result string to number and return
  return Number(result);
}