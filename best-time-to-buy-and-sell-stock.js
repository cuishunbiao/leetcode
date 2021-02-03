/**
 * @param {number[]} prices
 * @return {number}
 * 
 * 第一种方式
 * 执行用时: 112 ms，超过36%
 * 内存消耗: 47.6 MB，超过12%
 * 
 * 1.先定义利润为 0
 * 2.最小值初始值为 prices[0]
 * 3.循环 -> 先取最大值：如果当前 i 的值比最小值大，则减去成为利润；最小值不变，继续小循环；
 *      如果小于最小值，则赋值最小值，直接进入下一次循环；
 * 
 */
// let maxProfit = function (prices) {
//     let lirun = 0;
//     let minNum = prices[0];
//     for (let i = 1; i < prices.length; i++) {
//         if (prices[i] >= minNum) {
//             lirun = (prices[i] - minNum > lirun) ? prices[i] - minNum : lirun;
//         } else {
//             minNum = prices[i];
//         }
//     }
//     return lirun;
// }

/**
 * 第二种方式
 * 执行用时: 112 ms，超过36%
 * 内存消耗: 47.4 MB，超过16%
 */
// let maxProfit = function (prices) {
//     let lirun = 0;
//     let minNum = prices[0];
//     for (let i = 1; i < prices.length; i++) {
//         minNum = Math.min(minNum, prices[i]);//求最小值
//         lirun = Math.max(lirun,prices[i] - minNum)
//     }
//     return lirun;
// }

/**
 * 第三种方式
 * 执行用时：80 ms, 在所有 JavaScript 提交中击败了 94.67%的用户
 * 内存消耗：47.6 MB, 在所有 JavaScript 提交中击败了11.91%的用户
 * */

let maxProfit = function (prices) {
    let lirun = 0;
    let minNum = prices[0];
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] - minNum > lirun) {
            lirun = prices[i] - minNum;
        } else {
            minNum = Math.min(minNum, prices[i]);
        }
    }
    return lirun;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));//5
console.log(maxProfit([7, 6, 4, 3, 1]));//0
