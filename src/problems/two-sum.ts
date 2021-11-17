/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const numsMap = new Map()
    for (let i = 0; i < nums.length; i++) {
        const numsi = nums[i];
        if (numsMap.has(numsi)) return [numsMap.get(numsi), i]
        numsMap.set(target - nums[i], i)
    }
    return 0
};