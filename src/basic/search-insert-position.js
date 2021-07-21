/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  // let i = 0;
  // while(i < nums.length){
  //     if( nums[i] === target || nums[i] > target){
  //         return i;
  //     }else if( i === nums.length - 1 ){
  //         return nums.length;
  //     }
  //     i++;
  // }

  /**
   * 二分法「就是一直分成两半，10-5-2-1」
   * 前提条件是：数组 和 无重复元素
   *
   * 先定义初始的 left 的 right 的值
   * 通过 left 和 right 的下标去取 中间的值 mid ；
   * mid 的值和目标值判断：
   *  如果大于目标值，说明右面的数据完全废弃，结果只能在左边；
   *  如果小于目标值，说明左面的数据完全废弃，结果只能在右边；
   * 循环更新 left 和 right 的值缩小区域
   *
   */
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    mid = left + Math.floor((right - left) / 2); //取中间的值
    console.log(right, left, mid);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
};

console.log(searchInsert([1, 3, 4, 6], 0));
