const arr = [3, 4, 4, 4, 1, 3, 1, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5];

const findMaxAndTall = () => {
  let count = 0;
  const findMax = Math.max(...arr);

  for (var i = 0; i <= arr.length; i++) {
    if (findMax < arr[i]) {
      findMax = arr[i];
      count = 1;
    } else {
      if (findMax == arr[i]) count += 1;
    }
  }
  return [findMax, count];
};

console.log(findMaxAndTall());
