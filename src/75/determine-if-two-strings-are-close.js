/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
    if (word1.length !== word2.length) return false;
    const wordMap1 = new Map()
    for (let item1 of word1) {
        const isElement = wordMap1.has(item1)
        if (isElement) {
            let value = wordMap1.get(item1)
            wordMap1.set(item1, value + 1)
        } else {
            wordMap1.set(item1, 1)
        }
    }
    const wordMap2 = new Map()
    for (let item2 of word2) {
        const isElement = wordMap2.has(item2)
        if (isElement) {
            let value = wordMap2.get(item2)
            wordMap2.set(item2, value + 1)
        } else {
            wordMap2.set(item2, 1)
        }
    }
    if (wordMap1.size !== wordMap2.size) return false;
    for (let key of wordMap1.keys()) {
        if (wordMap1.get(key) !== wordMap2.get(key)) return false;
    }
    return true
};
const word1 = "cabbba", word2 = "abbccc"
console.log(closeStrings(word1, word2))