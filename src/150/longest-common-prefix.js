/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    // 找到最短的循环
    let len = Infinity;
    for (let str of strs) {
        len = Math.min(str.length, len)
    }
    let result = ""
    for (let l = 0; l < len; l++) {
        let current = strs[0][l]
        for (let i = 0; i < strs.length; i++) {
            if (strs[i][l] !== current) {
                return result
            }
        }
        result += strs[0][l]
    }

    return result
};
const strs = ["dog", "racecar", "car"]
console.log(longestCommonPrefix(strs));
