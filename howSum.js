const howSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(null);
  table[0] = [];

  for (let i = 0; i <= targetSum; i++) {
    if (table[i] !== null) {
      for (let num of numbers) {
        table[i + num] = [...table[i], num];
      }
    }
  }

  return table[targetSum];
};

const data = [1, 2, 3, 4, 5];
console.log(data.splice(4).toString());

// console.log(howSum(8, [8, 4, 2, 4]));
// console.log(howSum(18, [2, 4, 2, 4]));
// console.log(howSum(30, [2, 4, 2, 4]));
// console.log(howSum(31, [2, 4, 2, 4]));
