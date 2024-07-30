/**
 * @param {string} digits
 * @return {string[]}
 */

const data = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
}
var letterCombinations = function (digits) {
    if (!digits.length) return [];
    const result = [];
    //定义回溯函数
    const backtrack = (combination, nextDigits) => {
        // 如果没有更多数字，将当前组合加入结果
        if (nextDigits.length === 0) {
            result.push(combination)
            return;
        }
        //获取当前数字对应的字母
        const currentDigit = nextDigits[0]
        const letters = data[currentDigit]
        for (let letter of letters) {
            backtrack(combination + letter, nextDigits.slice(1))
        }
    }
    backtrack('', digits)
    return result;
};

const digits = "23"
console.log(letterCombinations(digits));
