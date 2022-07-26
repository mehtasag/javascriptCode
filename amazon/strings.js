const wordCountCamelCase = (s) => {
  let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let count = 1;

  for (var i = 0; i < s.length; i++) {
    for (var j = 0; j < alphabets.length; j++) {
      if (alphabets[j] === s[i]) {
        count++;
      }
    }
  }
  return count;
};

console.log(wordCountCamelCase("demoWorldIsGoingToRock"));
