/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    return s.trim().split(/\s+/).reverse().join(' ')
};


const s = "  hello world  "
console.log(reverseWords(s));