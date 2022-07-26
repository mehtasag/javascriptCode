const stringInString = (string, substring) => {
  let newString = [];

  newString.push(string);
  //   if (string === "" || substring === "" || string.length < substring.length)
  //     return false;
  //   let charIndex = 0;
  //   for (let i = 0; i < string.length; i += 1) {
  //     const char = substring[charIndex];
  //     if (string[i] === char) {
  //       charIndex += 1;
  //     }
  //   }
  //   return charIndex === substring.length;

  console.log(newString.flatMap((data) => data));
};

console.log(
  stringInString(["adahackeradadarankadadas", "denmo"], "hackerrank")
);
