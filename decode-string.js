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


    // structure = {
    //     number: 3,
    //     letter: 'a',
    //     leftLaber: false,
    //     rightLaber: false,
    //     child: [
    //         {
    //             number: 2,
    //             letter: 'b',
    //             leftLaber: false,
    //             rightLaber: false,
    //         }
    //     ]
    // }

    let structure = {}
    for (let code of s) {
        if (!isNaN(parseInt(code, 10))) {
            structure = {
                number: code,
                letter: '',
                leftLaber: false,
                rightLaber: false,
            }
        } else if (code === '[') {
            structure.leftLaber = true;
            continue;
        } else if (code === ']') {
            structure.rightLaber = true;
            result = loopCode(structure.number, structure.letter)
            return result
        } else {
            if (structure.child && structure.child.length) {
                structure.child.letter += code;
            } else {
                structure.letter += code;
            }
        }
    }
    // function splitFn(code){
    //     if (!isNaN(parseInt(code, 10))) {
    //         structure.push({
    //             number: code,
    //             letter: '',
    //             leftLaber: false,
    //             rightLaber: false,
    //         })
    //     } else if (code === '[') {
    //         if (structure.leftLaber)
    //             structure.leftLaber = true;
    //         continue;
    //     } else if (code === ']') {
    //         structure.rightLaber = true;
    //         result = loopCode(structure.number, structure.letter)
    //         return result
    //     } else {
    //         if (structure.leftLaber) {
    //             structure.letter += code;
    //         }
    //     }
    // }

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

console.log(decodeString('3[a2[b]]'))