const isNumInArray = (nums, target) => {
  for (let num of nums) {
    if (num === target) return true;
  }
  return false;
};

console.log(isNumInArray([1, 2, 3, 0, 0, 321, 21, 4], 4));
