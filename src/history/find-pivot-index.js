/**
 * @param {number[]} nums
 * @return {number}
 * 
 * 先计算所有元素的和；
 * 进入循环
 * 左侧每次都相加；右侧每次都计算；
 * 如果相等，则返回 i；
 * 否则 -1；
 * 
 */
var pivotIndex = function (nums) {
    const sum = nums.reduce((a, b) => a + b);
    let leftSum = 0
    for (let i = 0; i < nums.length; i++) {
        const rightSum = sum - leftSum - nums[i]
        if (leftSum === rightSum) {
            return i
        }
        leftSum += nums[i]
    }
    return -1
};

const nums = [1, 7, 3, 6, 5, 6]
console.log(pivotIndex(nums))