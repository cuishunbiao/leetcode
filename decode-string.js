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
    let stack = []
    for (let code of s) {
        //如果碰到 ] 则出站
        if (code === ']') {
            console.log(stack)
            let _code = outStackFn(stack);
            if (!stack.length) {
                return _code
            }
            stack.push(_code);
            continue;
        }
        //一切进栈
        stack.push(code);
    }
    function outStackFn(stack) {
        //如果出栈的时候，有 number 了，说明不需要再出了。
        let len = stack.length - 1;
        let number = 0;
        let letter = '';
        while (len >= 0) {
            //如果是 number 则退出循环，并返回值；
            if (!isNaN(parseInt(stack[len], 10))) {
                number = stack.pop();
                let _letter = letter.split('').reverse().join("")
                return loopCode(number, _letter)
            } else if (stack[len] === '[') {
                len--;
                stack.pop();
                continue;
            } else {
                letter += stack.pop();
            }
            len--;
        }
    }
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

console.log(decodeString("3[a]2[bc]"))