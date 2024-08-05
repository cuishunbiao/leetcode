/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 * 滑动窗口
 * 
 * 
 * 
 */
var maxVowels = function(s, k) {
    const vowels = 'aeiou';
    let count = 0//每组的无音数量
    let vowelsNum = 0
    for (let left = 0, right = 0; right < s.length; right++){
        if (vowels.includes(s[right])) vowelsNum++;
        if (right + 1 >= k) {
            count = Math.max(vowelsNum, count)
            if (vowels.includes(s[left])) vowelsNum--;
            left++
        }
    }
    return count
};
const s = "abciiidef", k = 3
console.log(maxVowels(s, k))