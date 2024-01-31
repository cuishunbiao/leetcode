const decodeString = (s) => {
    let numberStack = []
    let stringStack = []
    let num = 0,
        str = ''
    debugger
    for (let code of s) {
        if (!isNaN(code)) {
            num = Number(code) //遇到数字改变 num 的值
        } else if (code === '[') {
            // 进栈
            numberStack.push(num)
            stringStack.push(str)
            num = 0
            str = ''
        } else if (code === ']') {
            //出栈
            const num = numberStack.pop()
            str = stringStack.pop() + str.repeat(num)
        } else {
            str += code
        }
    }
    return str
}

console.log(decodeString('3[a]2[bc]'))
