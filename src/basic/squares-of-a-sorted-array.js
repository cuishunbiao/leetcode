/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var sortedSquares = function (nums) {
//     for (let [index, num] of nums.entries()) {
//         nums[index] = num * num
//     }
//     return nums.sort((a, b) => a - b)
// };
var sortedSquares = function (nums) {
  let n = nums.length,
    j = n - 1,
    pot = n - 1;
  let arr = new Array(nums.length);
  for (let i = 0; i <= j; ) {
    if (nums[i] * nums[i] > nums[j] * nums[j]) {
      arr[pot] = nums[i] * nums[i];
      i++;
    } else {
      arr[pot] = nums[j] * nums[j];
      j--;
    }
    pot--;
  }
  return arr;
};
console.log(sortedSquares([-4, -1, 0, 3, 10]));
