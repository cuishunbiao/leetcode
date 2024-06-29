/**
 * @param {string} s
 * @return {string}
 * 
 * stack out;
 * 1. go stack;
 * 2. if char is * , then char of stack is pop;
 * 
 */
var removeStars = function (s) {
    const stack = []
    for (let item of s) {
        if (item === '*') {
            stack.pop()// remove last char from stack
        } else {
            stack.push(item)
        }
    }
    return stack.join('')
};
const s = "erase*****"
console.log(removeStars(s));