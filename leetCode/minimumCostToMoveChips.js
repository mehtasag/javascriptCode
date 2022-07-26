const minCostTomoveChips = (position) => {
  let odd = 0;
  let even = 0;

  for (let item of position) {
    if (item % 2 === 0) even++;
    if (item % 2 !== 0) odd++;
  }
  return Math.min(odd, even);
};

console.log(minCostTomoveChips([2, 2, 2, 3, 3]));
