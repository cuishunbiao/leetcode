/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
    if (word1.length !== word2.length) return false;

    // 检查字符集
    const set1 = new Set(word1)
    const set2 = new Set(word2)
    if (set1.size !== set2.size) return false;
    for (let char of set1) {
        if (!set2.has(char)) return false
    }

    // 检查字符频率
    const getFrequencyMap = (word) => {
        const wordMap = new Map()
        for (let char of word) {
            wordMap.set(char, (wordMap.get(char) || 0) + 1)
        }
        return wordMap
    }
    const wordMap1 = getFrequencyMap(word1)
    const wordMap2 = getFrequencyMap(word2)

    const value1 = Array.from(wordMap1.values()).sort((a, b) => a - b)
    const value2 = Array.from(wordMap2.values()).sort((a, b) => a - b)

    if (value1.length !== value2.length) {
        return false;
    }

    for (let i = 0; i < value1.length; i++) {
        if (value1[i] !== value2[i]) return false;
    }

    return true
};
const word1 = "abc", word2 = "bca"
console.log(closeStrings(word1, word2))