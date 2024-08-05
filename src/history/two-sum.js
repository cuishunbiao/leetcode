/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    if (!nums.length) return []
    const sumMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        const numsI = nums[i]
        const result = target - numsI;
        if (sumMap.has(numsI)) {
            return [sumMap.get(numsI), i]
        }
        sumMap.set(result, i)
    }
    return null
};


const nums = [3, 3], target = 6
console.log(twoSum(nums, target))