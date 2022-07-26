const arr = [];
// while (arr.length < 3) {
//   let r = Math.floor(Math.random() * 49) + 1;
//   if (arr.indexOf(r) === -1) arr.push(r);
// }

for (let i = 0; i < 100; i++) {
  const randomNumber = Math.floor(Math.random() * 100);
  arr.push(randomNumber);
}

const startFast = new Date();
console.log("arr:", arr);
const endFast = new Date();
console.log(`Fast n finished in ${endFast - startFast} ms`);
