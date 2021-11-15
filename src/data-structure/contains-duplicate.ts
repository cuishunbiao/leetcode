/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    const map = new Map()
    for (let i of nums) {
        if (map.get(i) === 1) return true;
        map.set(i, 1)
    }
    return false
};
console.log(containsDuplicate([1, 2, 3, 1]))