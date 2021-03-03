/**
 * @param {string} s
 * @return {string}
 * 先解一个 3[a]
 * 
 * 以 [] 为分隔符
 * 拿到第一个，就开始寻找第二个
 * 
 */
var decodeString = function (s) {
    let result = '';
    /**
     * 还是要出入栈，出入栈必须匹配
     * 定义一个数据结构，来存放数字和需要循环的字符，并传值到 loopCode 里「structure」
     * 
     * 需要整理数据结构
     * 
     */
    let label = {
        ']': '['
    }

    let structure = {
        number: 0,
        letter: ''
    }
    for (let code of s) {
        if (typeof code === Number) {
            structure.number = code;
        } else if (code === '[') {

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
    console.log(loopCode(3, 'a'))

};

decodeString()