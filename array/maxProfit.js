function maxProfit(prices) {
  let minPrice = prices[0];
  let maxProfit = prices[1] - prices[0];

  for (let i = 1; i < prices.length; i++) {
    let currentPrice = prices[i];
    let potentialProfit = currentPrice - minPrice;
    maxProfit = Math.max(maxProfit, potentialProfit);
    minPrice = Math.min(minPrice, currentPrice);
  }

  return maxProfit;
}

// console.log(maxStockProfit([1, 3, 5, 10, 12]));
console.log(maxProfit([1, 3, 5, 12]));
