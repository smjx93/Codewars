/* "I love you"
"a little"
"a lot"
"passionately"
"madly"
"not at all"

determine which phrase the girls would say at the last petal for a 
flower of a given number of petals. The number of petals is always 
greater than 0.
If there are more than 6 petals, you start over with "I love you" 
for 7 petals, "a little" for 8 petals and so on. */


function howMuchILoveYou(numPetals) {
  const phrases = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];
  return phrases[(numPetals - 1) % phrases.length];
}

/* This function uses an array of the phrases and the modulo operator 
to handle cases where there are more than 6 petals. 

The index of the phrase is calculated by subtracting 1 from the number 
of petals and using modulo with the length of the array, which will 
wrap around to the start of the array when necessary. 

The corresponding phrase is then returned. */