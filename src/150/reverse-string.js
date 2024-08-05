/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    if (s.length < 2) return s
    let i = 0, j = s.length - 1
    while (i < j) {
        [s[i], s[j]] = [s[j], s[i]]
        i++;
        j--;
    }
};

const s = ["h", "e", "l", "l", "o"]
console.log(reverseString(s))