// O(n) Complexity
// Two Pointers

const fiveSort = (arr) => {
  let i = 0;
  let j = arr.length - 1;

  while (i <= j) {
    if (arr[j] === 5) {
      j--;
    } else if (arr[i] === 5) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i += 1;
    } else {
      i++;
    }
  }
  return arr;
};

console.log(fiveSort([12, 2, 5, 7, 5, 2]));
