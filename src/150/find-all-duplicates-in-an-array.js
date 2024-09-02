/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
    const map = new Map()
    let result = []
    for (let item of nums) {
        if (map.get(item)) {
            result.push(item)
        } else {
            map.set(item, 1)
        }
    }
    return result
};
const nums = [4, 3, 2, 7, 8, 2, 3, 1]
console.log(findDuplicates(nums));