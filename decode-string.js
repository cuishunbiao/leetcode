/**
 * @param {string} s
 * @return {string}
 * 先解一个 3[a]
 * 
 * 以 [] 为分隔符
 * 拿到第一个，就开始寻找第二个
 * 
 * 
 *  * 遇到 数字、[、字母进栈
 * 遇到 ] 出栈，一直出到匹配上一个数字，返回一个数字做为入栈。
 *
 * 
 */
var decodeString = function (s) {
    /**
     * 定义两个栈，存放数字和字符串，当遇到 [ 时，则进栈。进栈的有 数字和[
     * 遇到 ] 出栈
     * 循环数字的时候用 repeat(number)
     * 
     */

    let numberStack = [];//数字栈
    let stringStack = [];//字符串栈
    let num = 0, str = '', result = '';

    for (let code of s) {
        debugger
        if (!isNaN(code)) {
            num = num * 10 + Number(code);
        } else if (code === '[') {
            //进栈
            numberStack.push(num);
            stringStack.push(str)
            num = 0;
            str = ''
        } else if (code === ']') {
            //出栈
            const num = numberStack.pop();
            str = stringStack.pop() + str.repeat(num)
        } else {
            str += code;
        }
    }

    return result
};

console.log(decodeString('3[a]2[bc]'))
