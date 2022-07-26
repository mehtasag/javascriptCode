const fibDemo = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;

  memo[n] = fibDemo(n - 1, memo) * fibDemo(n - 2, memo);
  return memo[n];
};

console.log(fibDemo(25));
