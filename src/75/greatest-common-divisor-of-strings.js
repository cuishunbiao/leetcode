/**
 *
 */
// 折腾半天，没理解题目要做啥，这个欧几里得的算法，是寻找最大公约数，就是「它们有共同的重复模式」
var gcdOfStrings = function (str1, str2) {
    // 在相同重复模式下，如果掉换顺序不相等，则没有重复串
    if (str1 + str2 != str2 + str1) return ''
    let n = str1.length
    let k = str2.length
    /**
     * 一直去取最小重复数
     * AAA 和 AAA => 3%3 = 0; 返回 AAA
     * AAAA 和 AAA => 4%3 = 1, 继续递归 => 3%1 = 0, => 继续递归， 返回 A
     * AAAAA 和 AAA => 5%3 = 2, 继续递归 => 3%2 = 1, => 继续递归,  2%1 => 0， 返回 A
     */
    const gcds = function (x, y) {
        if (!y) {
            return x
        }
        return gcds(y, x % y)
    }
    let div = gcds(n, k)
    return str1.slice(0, div)
}
const str1 = 'AAAAA',
    str2 = 'AAA'

console.log(gcdOfStrings(str1, str2))
