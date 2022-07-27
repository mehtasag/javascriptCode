// Given five positive integers, find the minimum and maximum values that can be
// calculated by summing exactly four of the five integers.
// Then print the respective minimum and maximum values as
//  a single line of two space-separated long integers.

const miniMaxSum = (arr) => {
  if (arr.length === null) return [];

  const maxNum = Math.max(...arr);
  const minNum = Math.min(...arr);

  const minSum = arr.reduce((a, b) => a + b, 0) - maxNum;
  const maxSum = arr.reduce((a, b) => a + b, 0) - minNum;

  console.log(minSum, maxSum);
  return minSum, maxSum;
};

console.log(miniMaxSum([1, 3, 2, 5, 7]));
