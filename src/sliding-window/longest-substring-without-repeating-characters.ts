/**
 * @param {string} s
 * @return {number}
 * 声明 Map 类型，去判断是否有 key，如果有，则直接把 num 置为0；
 * 如果 Map 里没有，则加 1
 * 散列表、滑动窗口(左指针、右指针的区间)
 */
var lengthOfLongestSubstring = function(s) {
    if (!s.length) return 0;
    let sMap = new Map(); //判断是否重复
    let leftIndex = 0, rightIndex = 0;
    let result = 0;
    for (let i=0; i<s.length; i++) {
        if (sMap.has(s[i])) {
            leftIndex = Math.max(sMap.get(s[i]), leftIndex);
        }
        sMap.set(s[i], i + 1)
        ++rightIndex;
        result = Math.max(rightIndex - leftIndex, result)
    }
    return result;
};