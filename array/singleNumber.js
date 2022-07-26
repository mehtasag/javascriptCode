// To Get Number that repeated less

const singleNumber = (numbers) => {
  const ht = [];
  for (num of numbers) {
    ht[num] = ht[num] + 1 || 1;
  }

  for (const key in ht) {
    if (ht[key] === 1) {
      return key;
    } else return [];
  }
};

console.log(singleNumber([1, 33, 112]));
