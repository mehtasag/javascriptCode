// // Pyramid

// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   // printing star
//   for (let k = 1; k <= i; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

/* Reverse Pyramid */

let n = 5;
let string = "";
// External loop
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 1; j <= n - i; j++) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < n - i + 1; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
