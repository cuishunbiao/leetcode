/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 * 输入: [0,1,0,3,12]
 * 输出: [1,3,12,0,0]
 * 1.先定义两个指针，一个 slow 一个 fast;
 * 2.当 fast 值不是 0 的时候，slow 赋值，并且 slow 和 fast 都向前移动一步；
 * 3.如果是 0，则快指针向前移动一步；
 * 4.快指针跑完，慢指针后面 Index 的值，都填充为 0；
 * 
 */
var moveZeroes = function(nums) {
    let len = nums.length - 1, slow = 0, fast = 0;
    if (!len) return nums;
    while (slow <= len) {
        if (fast > len) {
            nums[slow] = 0;
            slow++;
            continue;
        }
        if (nums[fast]) {
            nums[slow] = nums[fast];
            slow++;
        }
        fast++;
    }
    return nums;
};
console.log(moveZeroes([0,1,0,3,12]))