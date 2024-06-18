/**
 * @param {character[]} chars
 * @return {number}
 * 定义一个当前字符变量 = a、b、c
 * 定义两个下标，一个 i，一个 j；
 *
 *
 */
var compress = function (chars) {
    let currentChar = chars[0]
    let number = 1
    for (let i = 1; i < chars.length; i++) {
        if (chars[i] === currentChar) {
            number++
        } else {
            let chars0 = chars[0]
            if (number > 1) {
                chars0 += number
            }
            chars[0] = chars0 + chars[i]
            currentChar = chars[i]
            number = 1
        }
    }
    if (number > 1) {
        chars[0] = chars[0] + number
    }
    return chars[0].split('')
}

console.log(compress(['a', 'a', 'b', 'b', 'c', 'c', 'c']))
