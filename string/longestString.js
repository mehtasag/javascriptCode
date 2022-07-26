var longestCommonPrefix = function (strs) {
  const newStrs = strs.map((data) => data.toLowerCase());
  console.log(newStrs);
  // Return early on empty input
  if (!strs.length) return "";

  // Loop through the letters of the first word
  for (let i = 0; i <= strs[0].length; i++) {
    // Check if this character is present in the same position of every string
    if (!strs.every((string) => string[i] === strs[0][i])) {
      // If not, return the string up to and including the previous character
      return strs[0].slice(0, i);
    }
  }
  console.log(strs[0]);

  return strs[0];
};

console.log(longestCommonPrefix(["sagar", "sagarmehta"]));
