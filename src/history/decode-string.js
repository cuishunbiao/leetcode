/**
 * @param {string} s
 * @return {string}
 * 
 * 遇到数字，存入数字栈；
 * 遇到 [ , 判断是否有字符串值，如果有值，则入栈，否则 - 开始收集字符串；
 * 遇到 ]，开始出栈；
 * 
 */
var decodeString = function (s) {
    let stack = [];
    let currentNum = 0;
    let currentStr = ''; // current string

    for (let char of s) {
        if (!isNaN(char)) {
            currentNum = currentNum * 10 + parseInt(char);
        } else if (char === '[') {
            stack.push([currentStr, currentNum])
            currentStr = '';
            currentNum = 0
        } else if (char === ']') {
            let [prevStr, num] = stack.pop()
            currentStr = prevStr + currentStr.repeat(num)
        } else {
            currentStr += char
        }
    }
    return currentStr

};

const s = "100[leetcode]"
console.log(decodeString(s));