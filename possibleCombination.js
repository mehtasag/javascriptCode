// 2^n would be general COMBINATIONS
const combination = (elements) => {
  if (elements.length === 0) return [[]];

  const firstElement = elements[0]; //To Get the First Element
  const rest = elements.slice(1); // To Get Rest Elements

  const combiWithoutFirst = combination(rest);
  const combsWithFirst = [];

  combiWithoutFirst.forEach((comb) => {
    const combWithFirst = [...comb, firstElement];
    combsWithFirst.push(combWithFirst);
  });

  const returnedData = [...combiWithoutFirst, ...combsWithFirst];
  return returnedData;
};

// console.log(combination(["b", "c"])); 4 Possible combinations

console.log(combination([]));

let array = ["apple", "banana", "lemon", "mango"];
let results = [];

// Since you only want pairs, there's no reason
// to iterate over the last element directly
for (let i = 0; i < array.length - 1; i++) {
  // This is where you'll capture that last value
  for (let j = i + 1; j < array.length; j++) {
    results.push(`${array[i]} ${array[j]}`);
  }
}

console.log(results);
