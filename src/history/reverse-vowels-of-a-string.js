/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    if (s.length < 2) return s
    const vowels = 'aeiouAEIOU'
    const sArr = s.split('')
    const stack = []
    // 如果有元音则入栈；
    for (let i of s){
        if (vowels.includes(i)) {
            stack.push(i)
        }
    }
    for (let j = 0; j < sArr.length; j++){
        if (vowels.includes(sArr[j])) {
            sArr[j] = stack.pop()
        }
    }
    return sArr.join('');
};

const s = "hello"
console.log(reverseVowels(s));