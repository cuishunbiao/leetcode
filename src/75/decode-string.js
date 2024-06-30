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
    let number = 0;
    let result = ''
    const numberStack = []
    const stringStack = []
    let isStack = false;
    for (let item of s) {

        if (typeof item === 'Number') {
            numberStack.push(item)
        } else if (item === '[') {
            // 入栈
            isStack = true

        } else if (item === ']') {
            // 出栈
            isStack = false;

        } else {
            if (isStack) {
                stack.push(item)
            }
        }
    }

    // repeat function
    const repeatItems = (number, string) => {
        return string.repeat(number)
    }

};

const s = "3[a]2[bc]"
console.log(decodeString(s));