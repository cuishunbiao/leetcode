/**
 * @param {number} n
 * @return {number}
 */
// var tribonacci = function (n) {
//     if (n === 0) return 0;
//     if (n === 1 || n === 2) return 1;

//     let sum = [0, 1, 1];
//     for (let i = 0; sum.length <= n; i++) {
//         sum[i + 3] = sum[i] + sum[i + 1] + sum[i + 2];
//     }
//     return sum[n]
// };

// console.log(tribonacci(25))


var tribonacci = function (n) {
    let memo = {};
    function helper(n) {
        if (n === 0) return 0;
        if (n === 1) return 1;
        if (n === 2) return 1;

        if (memo[n] != undefined) return memo[n]
        memo[n] = helper(n - 1) + helper(n - 2) + helper(n - 3)
        return memo[n]
    }
    return helper(n);
};

console.log(tribonacci(34))
