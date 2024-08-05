/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;

    const charCount = {};

    for (let i = 0; i < s.length; i++) {
        charCount[s[i]] = (charCount[s[i]] || 0) + 1;
        charCount[t[i]] = (charCount[t[i]] || 0) - 1;
    }

    console.log(charCount);

    for (let count of Object.values(charCount)) {
        if (count !== 0) return false;
    }

    return true;
};
const s = "anagram", t = "nagaram"
console.log(isAnagram(s, t));