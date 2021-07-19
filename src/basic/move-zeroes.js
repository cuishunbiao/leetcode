/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 输入: [0,1,0,3,12]
 * 输出: [1,3,12,0,0]
 * 两个指针，快慢指针
 */
var moveZeroes = function (nums) {
  let slowIndex = 0,
    fastIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums.length === 1) return nums;
    if (nums[i]) {
      nums[slowIndex] = nums[i];
      if (fastIndex > slowIndex) {
        nums[fastIndex] = 0;
      }
      slowIndex++;
    }
    fastIndex++; //快指针一直向前跑
  }
  return nums;
};
console.log(moveZeroes([1]));
