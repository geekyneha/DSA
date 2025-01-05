// 121 best time to buy and sell stock
var maxProfit = function (prices) {
  // assume first day is the cheapest to buy
  let minPrice = prices[0];

  //
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i];
    // update minimum price if the lower price is found
    minPrice = Math.min(minPrice, currentPrice);

    const potentialProfit = currentPrice - minPrice;

    maxProfit = Math.max(maxProfit, potentialProfit);
  }
  console.log(maxProfit);
};

maxProfit([7, 6, 4, 3, 1]);
