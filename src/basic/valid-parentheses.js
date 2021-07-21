/**
 * @param {string} s
 * @return {boolean}
 * 出入栈
 *
 */
// var isValid = function (s) {
//     if (s.length % 2 === 1) return false;
//     let stack = []
//     for (let string of s) {
//         if (string === '(' || string === '[' || string === '{') {
//             stack.push(string)
//         } else if (string === ')') {
//             if (stack.pop() !== '(') return false;
//         } else if (string === ']') {
//             if (stack.pop() !== '[') return false
//         } else if (string === '}') {
//             if (stack.pop() !== '{') return false
//         }
//     }
//     return stack.length ? false : true;
// };

var isValid = function (s) {
  if (s.length % 2 === 1) return false;
  const stacklist = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  let stack = [];
  for (let string of s) {
    //如果没有这个 key
    if (!stacklist[string]) {
      stack.unshift(string);
      continue;
    }
    if (stacklist[string] !== stack[0]) {
      return false;
    } else {
      stack.shift();
    }
  }
  return !stack.length;
};

let s = "{[]}";
console.log(isValid(s));
