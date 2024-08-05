/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    if (!nums.length) return null
    let result = 0
    for (let i = 0; i < nums.length; i++) {
        result ^= nums[i];
    }
    return result
};
const nums = [2, 2, 1]
console.log(singleNumber(nums))