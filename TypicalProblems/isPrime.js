// Linear Complexity

// Time: O(n);

// Space O(1)

const isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};
console.log(isPrime(0999999));
