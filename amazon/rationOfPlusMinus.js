const ratioPlusMinus = (arr) => {
  if (arr.lenght === null) return 1;

  var pos = 0;
  var neg = 0;
  var zero = 0;
  let posResult = 0;
  let negResult = 0;
  let zeroResult = 0;

  let result = [];

  for (let item of arr) {
    if (item > 0) {
      pos = pos + 1;
      
    } else if (item < 0) {
      neg = neg + 1;
    } else {
      zero = zero + 1;
    }
  }
  return result;
};

console.log(ratioPlusMinus([1, -2, 3, 4, -5, 6, 0]));
