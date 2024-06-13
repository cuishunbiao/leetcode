/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 * 先找到短的，循环短的；
 * 两个指针，i 是短的，j 是长的。
 * 移动一个 i，移动多个 j
 * 如果匹配上了，则同时移动 i,j ，并把数据保存到新字符串里，当不匹配的时候，或者到最后，把字符串移动到数组里。
 *
 */
var gcdOfStrings = function (str1, str2) {
    const shortStr = str1.length > str2.length ? str2 : str1
    for (let i = 0, j = 0; i < shortStr; i++) {}
}
const str1 = 'ABCABC',
    str2 = 'ABC'
