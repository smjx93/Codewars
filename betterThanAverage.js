function betterThanAverage(classScores, yourScore) {
    // Calculate the sum of all the test scores
    const sum = classScores.reduce((total, score) => total + score, 0);
  
    // Calculate the average of the test scores
    const average = sum / classScores.length;
  
    // Compare your score to the average and return the result
    return yourScore > average;
  }

  