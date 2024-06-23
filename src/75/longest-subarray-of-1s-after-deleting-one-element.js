/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
    let left = 0, right = 0;
    let count = 0 // 包含 0的值，如果多个 0，则 left ++；

    for (; right < nums.length; right++) {
        if (nums[right] === 0) {
            count++;
        }
        if (count > 1) {
            if (nums[left] === 0) { count-- }
            left++;
        }
    }
    return right - left - 1
};

const nums = [1, 1, 1]
console.log(longestSubarray(nums))