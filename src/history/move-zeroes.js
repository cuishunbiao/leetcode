/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * i 一直向前跑
 * j 作为
 */
var moveZeroes = function (nums) {
    if (nums.length < 2) return nums
    for (let left = 0, right = 0; right < nums.length; right++){
        const rightNumber = nums[right];
        if (rightNumber !== 0) {
            const cache = nums[left]
            nums[left] = nums[right]
            nums[right] = cache
            left++
        }
    }
    return nums
};
const nums = [0, 1]
console.log(moveZeroes(nums));