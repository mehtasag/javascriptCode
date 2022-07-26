// Complexity O(n) Time O(n)

const pairSum = (numbers, targetSum, memo = {}) => {
  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers);
    const num = numbers[i];

    const complement = targetSum - num;

    if (complement in memo) {
      return [i, memo[complement]];
    }
    memo[num] = i;
  }
};

console.log(pairSum([4, 3, 5, 1, 9], 12));
