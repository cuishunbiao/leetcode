/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.toLowerCase().replace(/[^a-z0-9]+/g, ""); // 转成小写
    const mid = Math.floor(s.length / 2)
    for (let i = 0, j = s.length - 1; i < mid; i++, j--) {
        if (s[i] !== s[j]) return false;
    }
    return true
};
const s = "a"
console.log(isPalindrome(s));