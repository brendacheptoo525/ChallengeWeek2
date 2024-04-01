function isPrime(num) {
    if (num <= 1) {
      return false; // 1 and numbers less than 1 are not prime
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false; // If the number has a divisor other than 1 and itself, it's not prime
      }
    }
    return true; // If no divisors other than 1 and itself are found, the number is prime
  }
  
  function filterPrimes(inputArray) {
    return inputArray.filter(num => isPrime(num)); // Use the filter method to create a new array containing only the prime numbers
  }
  
  const inputArray = [10, 11, 12, 13];
  console.log(filterPrimes(inputArray));