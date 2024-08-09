/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (!needle.length) return 0
    if (haystack.length < needle.length) return -1;
    const n = haystack.length - needle.length
    for (let i = 0; i <= n; i++) {
        if (haystack.slice(i, i + needle.length) === needle) {
            return i
        }
    }
    return -1;
};
const haystack = "a", needle = "a"
console.log(strStr(haystack, needle))