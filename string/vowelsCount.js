// Solution 1
const getVowelsCount = (str) => {
  let vowelCount = 0;

  const arr = str.toLowerCase().split("");

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "a":
        vowelCount++;
        break;
      case "e":
        vowelCount++;
        break;
      case "i":
        vowelCount++;
        break;
      case "o":
        vowelCount++;
        break;
      case "u":
        vowelCount++;
        break;
    }
  }
  return vowelCount;
};

console.log(getVowelsCount("SAgar"));

// Solution 2

const getCount = (str) => {
  return (str.match(/[aeiou]/gi) || []).length;
};

console.log(getCount("SaAgar"));
