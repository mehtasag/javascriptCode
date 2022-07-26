// const canSum = (targetSum, numbers) => {
//   const table = Array(targetSum + 1).fill(false);
//   table[0] = true;

//   for (let i = 0; i <= targetSum; i++) {
//     if (table[i] === true) {
//       for (let num of numbers) {
//         table[i + num] = true;
//       }
//     }
//   }
//   return table[targetSum];
// };

// console.log(canSum(7, [17, 10, 3, 4, 2]));
// console.log(canSum(7, [2, 1, 23, 4]));

// Return Boolean True / False if Sum of Given nmuber is possible using given array

const canSumTrueOrFalse = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of numbers) {
    const remainder = targetSum - num;
    if (canSumTrueOrFalse(remainder, numbers, memo) === true) {
      memo[targetSum] = true;
      return true;
    }
  }
  memo[targetSum] = false;
  return false;
};

console.log(canSumTrueOrFalse(7, [2, 6]));
