/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const reverse = (start, end) => {
        while (start < end) {
            // 解构，换两个数位置
            [nums[start++], nums[end--]] = [nums[end], nums[start]]
        }
    }
    k %= nums.length;// 取余数
    reverse(0, nums.length - 1); //所有内容反转
    reverse(0, k - 1); //前部分的反转
    reverse(k, nums.length - 1); //反转后半部分
    return nums
};
console.log(rotate([1,2,3,4,5,6,7,8], 3));
