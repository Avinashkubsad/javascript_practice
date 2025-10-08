const bestTime = (arr) => {
  let n = arr.length;
  let maxProfit = 0;
  let buyPrice = 0;
  let sellPrice = 0;

  // Outer loop for the buy day
  for (let i = 0; i < n; i++) {
    // Inner loop for the sell day
    for (let j = i + 1; j < n; j++) {
      const profit = arr[j] - arr[i]; // Calculate profit
      if (profit > maxProfit) {
        maxProfit = profit; // Update max profit
        buyPrice = arr[i]; // Update buy price
        sellPrice = arr[j]; // Update sell price
      }
    }
  }

  return {
    maxProfit,
    buyPrice,
    sellPrice,
  };
};

// Example usage
let arr = [6, 4, 8, 7, 3, 5, 9];
const result = bestTime(arr);
console.log(`Maximum Profit: ${result.maxProfit}`); // Output: Maximum Profit: 7
console.log(`Buy at: ${result.buyPrice}, Sell at: ${result.sellPrice}`); // Output: Buy at: 2, Sell at: 9

// let arr =[2,4,3,6,4,5];

// const bestTime = (arr) => {
//     let n = arr.length, maxProfit = 0, minProfit = Infinity;
//     for(let i =0; i < n; i++) {
//         if(arr[i] < minProfit){
//             minProfit = arr[i]
//         }
//             else{
//                 maxProfit = Math.max(maxProfit, arr[i]-minProfit)
//             }

//     }
//     return maxProfit
// };

// console.log(bestTime(arr))
