function processData(input) {
  var args = input.split("\n");
  var n = Number(args[0]);
  var candles = args[1].split(" ").map(Number);
  var max = Math.max.apply(null, candles);
  var count = 0;
  for (let i = 0; i < n; i += 1) {
    if (candles[i] === max) {
      count += 1;
    }
  }
  console.log(count);
}

console.log([1, 2, 3, 4].split(""));
