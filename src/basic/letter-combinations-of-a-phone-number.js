/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function (digits) {
    const len = digits.length
    if (digits === null || !len) return []
    const phone = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz',
    }
    //存储最终结果
    const res = [];
    const mergeFn = (i, s) => {
        if (i === len) {
            res.push(s)
            return
        }
        for (const dig of phone[digits[i]]) {
            mergeFn(i + 1, s + dig)
        }
    }
    mergeFn(0, '')
    return res
}
console.log(letterCombinations('234'));