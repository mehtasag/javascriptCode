// const playButton = (num) => {
//   let string = "";

//   for (let row = 0; row < 2 * num; row++) {
//     let totalCols = row > num ? 2 * num - row : row;

//     for (let col = 0; col < totalCols; col++) {
//       string += "*";
//     }
//     string += "\n";
//   }

//   return string;
// };

// console.log(playButton(5));

// Diamond String Pattern

// let n = 5;
// let string = "";
// // Upside pyramid
// for (let i = 1; i <= n; i++) {
//   for (let j = n; j > i; j--) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < i * 2 - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// // downside pyramid
// for (let i = 1; i <= n - 1; i++) {
//   // printing spaces
//   for (let j = 0; j < i; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let k = (n - i) * 2 - 1; k > 0; k--) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

// const printNumInPyramid = (num) => {
//   let string = "";

//   for (let row = 1; row <= num; row++) {
//     for (let space = 0; space < num - row; space++) {
//       string += " ";
//     }
//     for (let col = row; col >= 1; col--) {
//       string += col + " ";
//     }

//     for (let col = 2; col <= row; col++) {
//       string += col + " ";
//     }
//     string += "\n";
//   }

//   return string;
// };

// console.log(printNumInPyramid(10));

// const printDiamondNumbers = (num) => {
//   let string = "";

//   for (let row = 1; row <= num; row++) {
//     for (let j = row; j > row; j--) {
//       string += " ";
//     }
//     for (let k = 1; k < row * 2 - 1; k++) {
//       string += k;
//     }

//     string += "\n";
//   }
//   return string;
// };

// console.log(printDiamondNumbers(10));

const square = (n, m) => {
  let arr = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      arr.push(j);
      // console.log(arr[i]);
    }
  }
  return arr;
};

console.log(square(4, 10));
