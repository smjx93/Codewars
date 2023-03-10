


function past(h, m, s) {
  const millisecondsInSecond = 1000;
  const millisecondsInMinute = 60 * millisecondsInSecond;
  const millisecondsInHour = 60 * millisecondsInMinute;

  return h * millisecondsInHour + m * millisecondsInMinute + s * millisecondsInSecond;
}

// In this solution, we calculate the number of milliseconds in a second, a minute, and an hour,
// and then use those values to convert the given hours, minutes, and seconds into milliseconds. 
// We return the total number of milliseconds since midnight.

// For example, if the clock shows 5 hours, 30 minutes, and 15 seconds after midnight, the 
// function call timeSinceMidnight(5, 30, 15) would return 19815000 (which is equivalent to 
// 5 hours, 30 minutes, and 15 seconds in milliseconds).