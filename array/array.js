// Find non consecutive number in array

const findNonConsecutiveNumber = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const curr = arr[i];
    const next = arr[i + 1];
    if (curr + 1 !== next) {
      return next;
    }
  }
  return null;
};

console.log(findNonConsecutiveNumber([1, 2, 3, 4, 5, 6, 7, 8, 10]));


