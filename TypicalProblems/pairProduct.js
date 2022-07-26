const pairProduct = (numbers, targetProduct) => {
  const previousNums = {};

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];

    const complement = targetProduct / num;

    if (complement in previousNums) {
      return [i, previousNums[complement]];
    }
    previousNums[num] = i;
  }
};

console.log(pairProduct([3, 2, 5, 4, 1], 15));
