// Write Function where string "2a1b3c"=> Output: aabccc

const unCompress = (s) => {
  const numbers = "0123456789";
  let result = [];

  let i = 0 /* Char A to z*/,
    j = 0; /*Number 1 to N */

  while (j < s.length) {
    if (numbers.includes(s[j])) {
      j++;
    } else {
      const num = Number(s.slice(i, j));
      for (let count = 0; count < num; count++) {
        result.push(s[j]);
        // console.log(result.push(s[j]));
      }
      j++;
      i = j;
    }
  }
  return result.join("");
};

console.log(unCompress("2a2b3z")); /* Expected Output: aabbzzz*/
console.log(("" += 2));
