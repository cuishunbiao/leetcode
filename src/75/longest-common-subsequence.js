/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    if (!text2) return 0
    let count = 0;
    let j = 0;

    let long = text1;
    let short = text2;

    if (text2.length > text1.length) {
        long = text2;
        short = text1;
    }

    for (let i = 0; i < long.length; i++) {
        const char = long[i]
        if (char === short[j]) {
            count++
            j++
        }
    }
    return count
};

const text1 = "bl", text2 = "yby"
console.log(longestCommonSubsequence(text1, text2));
