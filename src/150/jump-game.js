/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let maxReach = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > maxReach) {
            return false;
        }
        maxReach = Math.max(maxReach, i + nums[i])
    }
    return maxReach >= nums.length - 1;
};
const nums = [2, 3, 1, 1, 4]
console.log(canJump(nums))