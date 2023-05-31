/**
 * @param {string} s
 * @return {boolean}
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
 * 出入栈
 * s = "()"
 * s = "()[]{}"
 * s = "(]"
 * 
 * 如果是 obj 对象里的 key，就入栈，如果不是就出栈；
 * 
 * push 和  pop
 * shift 和 unshift
 */
var isValid = function (s) {
    let stack = [];
    const lists = {
        "}": "{",
        "]": "[",
        ")": "("
    }
    for (let str of s) {
        if (!strList(str)) {
            stack.push(str)
        } else {
            if( stack.pop() !== lists[str] ) return false
        }
    }
    return !stack.length
};
console.log(isValid("(]"))