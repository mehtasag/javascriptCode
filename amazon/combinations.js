// Input Array =[1,3,5,7,9,10,13,15,19] and k=Sub Array's length

// Complexity
// Time - O(n choose k)
// Space- O(n choose k)

const combinations = (arr, k) => {
  // Sanity Check Or Base Case

  if (arr.length < k) return [];

  if (k === 0) return [[]]; //For k=0, there will be always one combination

  //   Get First item of an array

  const first = arr[0];

  const comboWithFirst = [];

  for (let combo of combinations(arr.slice(1), k - 1)) {
    comboWithFirst.push([first, ...combo]);
  }

  const comboWithoutFirst = combinations(arr.slice(1), k);

  return [...comboWithFirst, ...comboWithoutFirst];
};

console.log(combinations([1, 3, 5, 8], 2));
