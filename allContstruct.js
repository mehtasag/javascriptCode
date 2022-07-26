const allConstruct = (target, wordBank) => {
  const table = Array(target.length + 1)
    .fill()
    .map(() => []);

  table[0] = [[]];

  for (let i = 0; i <= table.length; i++) {
    for (let word of wordBank) {
      if (target.slice(i, i + word.length) === word) {
        const newCombo = table[i].map((subArray) => [...subArray, word]);

        table[i + word.length].push(...newCombo);
      }
    }
  }

  return table[target.length];
};

// console.log(allConstruct("purple", ["pur", "ple", "pu", "rple", "purpl", "e"]));

const filteredArray = (a1, a2) => {
  return a1.filter((n) => a2.indexOf(n) !== -1);
};

var colors1 = ["red", "blue", "green"];
var colors2 = ["red", "yellow", "blue"];
console.log(filteredArray(colors2, colors1));
