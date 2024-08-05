/**
 * @param {character[]} chars
 * @return {number}
 * 定义一个当前字符变量 = a、b、c
 * 定义两个下标，一个 i，一个 j；
 *
 *
 */
var compress = function (chars) {
    let index = 0
    let i = 0
    while (i < chars.length) {
        let currentChar = chars[i]
        let count = 0
        while (i < chars.length && currentChar === chars[i]) {
            i++
            count++
        }
        chars[index] = currentChar
        index++

        if (count > 1) {
            const countStr = count.toString()
            for (let j = 0; j < countStr.length; j++) {
                chars[index] = countStr[j]
                index++
            }
        }
    }
    return index
}
// ['a', 'a']
// ["a","b","c"]
// ['a', 'a', 'b', 'b', 'c', 'c', 'c']
console.log(compress(['a', 'a', 'b', 'b', 'c', 'c', 'c']))

// var compress = function (chars) {
//     if (chars.length === 1) return 1
//     let currentChar = chars[0]
//     let s = ''
//     let i = 1
//     let number = 1
//     while (i <= chars.length) {
//         if (currentChar === chars[i]) {
//             number++
//         } else {
//             s += currentChar
//             currentChar = chars[i]
//             if (number > 1) {
//                 s += number
//             }
//             number = 1
//         }
//         i++
//     }
//     if (number > 1) {
//         s += currentChar
//         if (number > 1) {
//             s += number
//         }
//     }
//     chars.length = 0
//     for (let c of s) {
//         chars.push(c)
//     }
//     return chars.length
// }
