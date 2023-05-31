/**
 * @param {string} s
 * @return {string}
 * 输入：s = "3[a]2[bc]" = 输出："aaabcbc"
 * s = "3[a2[c]]" = "accaccacc"
 * "abc3[cd]xyz" = "abccdcdcdxyz"
 
 输出这种结构
 {
    num: 3,
    code: a,
    children: {
        num: 2,
        code: bc
    }
 }
 * 
 */
var decodeString = function(s) {
    let numberStack = [];//数字栈
    let stringStack = [];//字符串栈
    let num = 0, str = '', result = '';

    for (let code of s) {
        debugger
        if (!isNaN(code)) {
            num = num * 10 + Number(code)
        } else if (code === '[') {
            //进栈
            numberStack.push(num);
            stringStack.push(str);
            num = 0;
            str = ''
        } else if( code === ']') {
            //出栈
            const num = numberStack.pop();
            str = stringStack.pop() + str.repeat(num)
        } else {
            str += code;
        }
    }
    return str;
};
console.log(decodeString('3[a]2[bc]'))