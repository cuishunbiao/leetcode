/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let count = 0
    const len = s.length
    for (let i = 0, j = 0; j < t.length; j++) {
        if (t[j] === s[i]) {
            count++
            i++
        }
    }
    return count === len
}
const s = 'abc',
    t = 'ahbgdc'
console.log(isSubsequence(s, t))
