/**
 * @param {number[]} nums
 * @return {number}
 * 滚动数组
 * 
 */
var maxProduct = function (nums) {
    let pre = 0, maxNums = nums[0] * nums[0]
    nums.forEach(item => {
        pre = Math.max((item * pre), item)
        maxNums = Math.max(pre, maxNums)
    });
    return maxNums
};
console.log(maxProduct([2, 3, -2, 4]))