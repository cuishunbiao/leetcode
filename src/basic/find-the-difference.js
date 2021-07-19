/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 *  给定两个字符串 s 和 t，它们只包含小写字母。
    字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。
    请找出在 t 中被添加的字母。

    示例 1：
    输入：s = "abcd", t = "abcde"
    输出："e"
    解释：'e' 是那个被添加的字母。

 */
var findTheDifference = function (s, t) {
  let snum = 0,
    tnum = 0;
  for (let code of s) {
    snum += code.charCodeAt();
  }
  for (let code of t) {
    tnum += code.charCodeAt();
  }
  let result = String.fromCharCode(tnum - snum);
  return result;
};

// var findTheDifference = function (s, t) {
//     const snum = s.split('').reduce((a, b) => a + b.charCodeAt(0), 0)
//     const tnum = t.split('').reduce((a, b) => a + b.charCodeAt(0), 0)
//     return String.fromCharCode(tnum - snum)
// };
console.log(findTheDifference("", "y"));
