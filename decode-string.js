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
     * 还是要出入栈，出入栈必须匹配
     * 定义一个数据结构，来存放数字和需要循环的字符，并传值到 loopCode 里「structure」
     * 需要整理数据结构
     */
    let numberStack = [];
    let stringStack = [];
    let isNumberAdd = false;
    let index = 0;
    for (let i = 0; i < s.length; i++) {
        //进入 数字栈
        if (!isNaN(parseInt(s[i], 10))) {
            if (isNumberAdd) {
                numberStack[numberStack.length - 1] = numberStack[numberStack.length - 1] + s[i];
                continue;
            }
            numberStack.push(s[i]);
            index = i;
            isNumberAdd = true;
        } else {
            isNumberAdd = false;
            //如果是 ] 括号，则出栈
            code = s[i];
            if (code === ']') {
                let newCode = ''
                let n = stringStack.length - 1;
                while (n >= 0) {
                    if (stringStack[n] === '[') {
                        stringStack.pop()
                        break;
                    } else {
                        newCode = stringStack.pop() + newCode;
                    }
                    n--;
                }
                code = loopCode(numberStack.pop(), newCode);
            }
            stringStack.push(code)
        }
    }
    return stringStack.join('');
    //一个循环函数
    function loopCode(number, code) {
        let resultCode = '';
        while (number) {
            resultCode += code
            number--
        }
        return resultCode;
    }
};

console.log(decodeString("3[a10[b]]"))
