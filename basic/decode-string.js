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

//  let numberStack = [];
//  let stringStack = [];
//  let isNumberAdd = false;
//  let index = 0;
//  for (let i = 0; i < s.length; i++) {
//      //进入 数字栈
//      if (!isNaN(parseInt(s[i], 10))) {
//          if (isNumberAdd) {
//              numberStack[numberStack.length - 1] = numberStack[numberStack.length - 1] + s[i];
//              continue;
//          }
//          numberStack.push(s[i]);
//          index = i;
//          isNumberAdd = true;
//      } else {
//          isNumberAdd = false;
//          //如果是 ] 括号，则出栈
//          code = s[i];
//          if (code === ']') {
//              let newCode = ''
//              let n = stringStack.length - 1;
//              while (n >= 0) {
//                  if (stringStack[n] === '[') {
//                      stringStack.pop()
//                      break;
//                  } else {
//                      newCode = stringStack.pop() + newCode;
//                  }
//                  n--;
//              }
//              code = loopCode(numberStack.pop(), newCode);
//          }
//          stringStack.push(code)
//      }
//  }
//  return stringStack.join('');
//  //一个循环函数
//  function loopCode(number, code) {
//      let resultCode = '';
//      while (number) {
//          resultCode += code
//          number--
//      }
//      return resultCode;
//  }

var decodeString = function (s) {
    /**
     * 定义两个栈，存放数字和字符串，当遇到 [ 时，则进栈。进栈的有 数字和[
     * 遇到 ] 出栈
     * 循环数字的时候用 repeat(number)
     * 
     */

    let numberStack = [];//数字栈
    let stringStack = [];//字符串栈
    let num = 0, str = '';

    for (let code of s) {
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

    return str
};

console.log(decodeString("3[a]2[bc]"))
