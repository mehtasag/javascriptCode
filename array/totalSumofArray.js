const sumArray = (arr) => {
  total = 0;

  const totalValues = arr.reduce((prv, curr) => prv + curr, 0);
  return totalValues;
};

console.log(sumArray([1, 3, 5, 12]));


