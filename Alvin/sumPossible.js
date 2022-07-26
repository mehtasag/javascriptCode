const sumPossible = (amount, numbers, memo = {}) => {
  if (amount < 0) return false;
  if (amount === 0) return true;
  for (let nums of numbers) {
    if (sumPossible(amount - nums, numbers, memo) === true) {
      memo[amount] = true;
      return true;
    }
  }

  return false;
};

console.log(sumPossible(8, [5, 12, 41, 4, 8]));
