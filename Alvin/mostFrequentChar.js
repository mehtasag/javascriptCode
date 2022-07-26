const mostFrequent = (s) => {
  if (s.length === 0) return "";
  const count = {};
  for (let char of s) {
    if (!(char in count)) {
      count[char] = 0;
      console.log(count);
    }
    count[char]++;
    console.log(count);
  }

  let bestChar = null;
  for (let char of s) {
    if (bestChar === null || count[char] > count[bestChar]) {
      bestChar = char;
    }
  }

  return bestChar;
};

console.log(mostFrequent("sAgar"));
