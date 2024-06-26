/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
    const result = new Map()
    for (let item of arr) {
        let avalue = result.get(item);
        if (avalue) {
            result.set(item, avalue + 1);
        } else {
            result.set(item, 1)
        }
    }
    const set = new Set()
    for (let res of result.values()) {
        if (set.has(res)) return false;
        set.add(res)
    }
    return true
};
const arr = [1, 2, 2, 1, 1, 3]
console.log(uniqueOccurrences(arr));