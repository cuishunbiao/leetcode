/**
 * @param {number[]} nums
 * @return {number}
 *
 * 1.先计算一个数的最大值
 * 2.计算两个数的最大值
 *
 */

// var maxSubArray = function (nums) {
//     let pre = 0;
//     let sum = nums[0];
//     nums.forEach(item => {
//         console.log(pre + item,item)
//         pre = Math.max(pre + item, item);
//         sum = Math.max(sum, pre)
//     })
//     return sum;
// };

//前面的数相加，只要小于后面的数，就前面就没有计算意义了。
let maxSubArray = function (arr) {
  let sums = arr[0];
  let total = 0;
  for (let i of arr) {
    debugger;
    total += i;
    if (sums > i) {
      total = sums;
    } else {
      total = i;
    }
  }
  return total;
};

console.log(maxSubArray([1, 2, -1, 5, -1, 2, 4]));
