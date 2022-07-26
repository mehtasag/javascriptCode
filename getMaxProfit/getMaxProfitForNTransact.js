const maxProfit = function(k, prices, memo = {}) {
  let ans = dp(0, k, 0);
  return ans;
  function dp(day, k, holding) {
    let key = day + "_" + k + "_" + holding;
    if (memo[key] !== undefined) {
      return memo[key];
    }
    if (k === 0 || day === prices.length) {
      return 0;
    }
    //Do nothing
    let max = dp(day + 1, k, holding);
    if (holding === 1) {
      //sell
      let res = prices[day] + dp(day + 1, k - 1, 0);
      max = Math.max(max, res);
    } else {
      //buy
      let res = -1 * prices[day] + dp(day + 1, k, 1);
      max = Math.max(max, res);
    }
    memo[key] = max;
    return max;
  }
};

console.log(
  maxProfit(2, [2, 10, 8, 30, 70, 60, 9000, 1000010, 20001, 2000001])
);
