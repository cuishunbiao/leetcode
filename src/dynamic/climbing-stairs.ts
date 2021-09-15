/**
 * @param {number} n
 * @return {number}
 * 
 * 先定义三个变量：0 0 0
 * 然后向前取值
 * 
 * 2 = 2
 * 3 = 3
 * 4 = 5
 */
var climbStairs = function (n) {
    if (n <= 1) return 1
    let a = 0, b = 0, c = 1;
    for (let i = 0; i < n; i++) {
        a = b;
        b = c;
        c = a + b;
    }
    return c
};
console.log(climbStairs(2))