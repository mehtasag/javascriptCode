// To remove duplicate use new Set() method instead
// To check if given number or element is in array use "has" method i.e only applies to Set Array

const removeDuplicate = (array) => {
  const newArray = new Set();

  for (let i = 0; i < array.length; i++) {
    const ele = array[i];
    newArray.add(ele);
  }
  return Array.from(newArray);
};

const data = [1, 3, 2, 1, 3, 1, 3, 13, 1, 32, 23, "Sagar"];

const newData = new Set(data);

// console.log("New Data has:", newData.has("Sagar"));

// console.log(
//   "Ele is:",
//   removeDuplicate(["cat", "dog", "god", "odg", "god", "dog"])
// );

// const data = [1, 3, 5, 7, 9, 11];

const sum = (array) => {
  return array[1] + array[array.length - 1];
};

console.log(sum([1, 3, 5, 7, 9, 11]));
