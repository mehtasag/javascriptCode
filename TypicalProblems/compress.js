const compress = (s) => {
  let result = [];

  let i = 0,
    j = 0;

  while (j <= s.length) {
    if (s[i] === s[j]) {
      j += 1;
    } else {
      num = j - i;

      if (num === 1) {
        result.push(s[i]);
      } else {
        result.push(num, s[i]);
      }
      i = j;
    }
  }
  return result.join("");
};

console.log(compress("aabbccdd"));
