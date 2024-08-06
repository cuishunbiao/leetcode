/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    if (nums.length === 0) return nums[0]
    let current = nums[0]
    let maxNums = nums[0]
    for (let i = 1; i < nums.length; i++) {
        current = Math.max(nums[i], current + nums[i])
        maxNums = Math.max(maxNums, current)
    }
    return maxNums
};
const nums = [5, 4, -1, 7, 8]
console.log(maxSubArray(nums));