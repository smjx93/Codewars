
function isPrime(num) {
  //TODO
//primes are greater than 1, so any number less than or equal to 1 cannot be prime
 if (num <= 1) {
    return false;
  }
//iterate from 2 up to the square root of num and checks if num is evenly divisible by 2
  for (i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
//no divisors found within the loop indicates that the num is a prime
  return true;
}
