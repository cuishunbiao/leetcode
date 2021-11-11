/**
 * @param {number[]} prices
 * @return {number}
 * 
 * 两层循环，j > i,一次一次的计算。N方
 * 无解，超出时间限制
 * 
 */
// var maxProfit = function (prices) {
//     if (prices.length <= 1) return 0
//     let maxPrice = 0;
//     for (let i = 0; i < prices.length - 1; i++) {
//         //每次都能拿到 i 的值 prices[i]
//         for (let j = i + 1; j < prices.length; j++) {
//             //每次都能拿到 i 和 j 的值 prices[i] 和 prices[j]
//             const result = prices[j] - prices[i]
//             if (result > maxPrice) {
//                 maxPrice = result
//             }
//         }
//     }
//     return maxPrice
// };
// console.log(maxProfit([7, 1, 5, 3, 6, 4]))

/**
 * 遍历一遍，寻找最小值，然后用每次的 i 去减最小值
 */
const maxProfit1 = (prices) => {
    if (prices.length <= 1) return 0
    let minPrice = prices[0];//当前最小值
    let maxPrice = 0
    for (let i = 0; i < prices.length; i++) {
        minPrice = Math.min(prices[i], minPrice)
        const result = prices[i + 1] - minPrice
        if (result > maxPrice) {
            maxPrice = result
        }
    }
    return maxPrice
}
console.log(maxProfit1([7, 1, 5, 3, 6, 4]))
