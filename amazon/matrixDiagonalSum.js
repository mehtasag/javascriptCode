// Expected output will be number(positive) because asked for

// Approach 1>>> Worst Case: Time O(n*n) and Space -: O(1) (Nested For Loop);

// Approach 2=>>>> Optimal Solution with Space complexity O(n);

const matrixDiagonal = (arr) => {
  let result = 0;

  let counterDiagonalSum = 0;

  for (let i = 0; i < arr.length; i++) {
    result += arr[i][i];

    counterDiagonalSum += arr[i][arr.length - i - 1];
  }
  return Math.abs(result - counterDiagonalSum);
};

console.log(
  matrixDiagonal([
    [1, 2, 3],
    [4, 5, 7],
    [9, 12, 14],
  ])
);
