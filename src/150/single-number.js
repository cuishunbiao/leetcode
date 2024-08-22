/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    if (!nums.length) return null
    if (nums.length === 1) return nums[0]
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        const item = nums[i]
        if (map.has(item)) {
            map.delete(item)
        } else {
            map.set(item, 1)
        }
    }
    return map.keys().next().value
};
const nums = [1]
console.log(singleNumber(nums));