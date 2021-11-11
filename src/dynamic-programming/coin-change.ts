/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 *
 * 拿到最小值 - 一直遍历
 *
 */
// var coinChange = function (coins, amount) {
//     if (!amount) return 0
//     if (!coins.length || (coins.length === 1 && coins[0] > amount)) return -1
//     let num = 0;
//     let minAmount = amount
//     while (amount > 0) {
//         num++
//         let isFalse = 0
//         for (let i = 0; i < coins.length; i++) {
//             const coinsResult = amount - coins[i]
//             if (coinsResult >= 0) {
//                 minAmount = Math.min(coinsResult, minAmount)
//                 isFalse = 0
//             } else {
//                 isFalse += 1
//                 if (coins.length - 1 === isFalse) return -1
//             }
//         }
//         amount = minAmount
//     }
//     return num
// };
// console.log(coinChange([186, 419, 83, 408], 6249))


var coinChange = function (coins, amount) {
    const memo = new Map();// 建立一个 Map
    function permute(left) {
        if (memo.has(left)) return memo.get(left)
        if (left === 0) return 0
        let min = Infinity;
        for (let coin of coins) {
            if (left - coin >= 0) min = Math.min(min, permute(left - coin))
        }
        memo.set(left, min + 1)
        return min + 1
    }
    const result = permute(amount)
    return result === Infinity ? -1 : result
}
console.log(coinChange([186, 419, 83, 408], 6249))