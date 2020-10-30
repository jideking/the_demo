// [2,3,5,1,6]  6-1=5
var maxProfit = function(prices) {
    if (!prices.length) return 0
    let arr = []
    for (let i=0;i<prices.length;i++) {
        let max = 0;
        for (let j=0;j<i;j++) {
            if (prices[i]-prices[j] > max)
            max = prices[i]-prices[j];
        }
        arr.push(max)
    }
    let max = Math.max.apply(this, arr)
    return max;

};

// [7,1,5,3,6,4]  
// [1,2,3,6]  3-1+6-4   2-1+6-3  1,2,3,4,6


// [3,2,6,5,0,3]   3  7 
// var maxProfit = function(prices) {
//     let arr = []
//     for (let i=0;i<prices.length;i++) {
//         let x = i;
//         sum = 0;
//         for (let j=i;j<prices.length-1;j++) {
//             if (prices[j+1] > prices[j] && j!=prices.length-2) {
//                 continue;
//             } else if(prices[j+1] > prices[j] && j==prices.length-2 && prices[j+1]-prices[i] > 0) {
//                 sum+=prices[j+1]-prices[i]
//             } else {
//                 if (prices[j]-prices[i] > 0) {
//                     sum+=prices[j]-prices[i]
//                     i=j+1; 
//                 }
//             }
          
//         }
//         i=x;  
//         arr.push(sum)
//     }
//     let max = Math.max.apply(this, arr)
//     return max;
// }

maxProfit([3,2,6,5,0,3])

var maxProfit = function(prices) {
    let sum = 0
    for(let i=1; i<prices.length; i++) {
        sum += Math.max(prices[i] - prices[i-1], 0)
    }
    return sum
};

var maxProfit = function(prices) {
    let profit_out = 0, profit_in = 0 -prices[0];
    let n = prices.length;
    for (let i = 1; i < n; i++){
        profit_out = Math.max(profit_out, profit_in + prices[i]);
        profit_in = Math.max(profit_in, profit_out - prices[i]);
    }
    return profit_out;
};