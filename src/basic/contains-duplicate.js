/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var containsDuplicate = function (nums) {
//     let newMaps = new Map();
//     for (let i = 0; i < nums.length; i++) {
//         if (newMaps.has(nums[i])) {
//             return true;
//         }
//         newMaps.set(nums[i], 1);
//     }
//     return false;
// };

/**
 * 用 sort 排序后，再找相临的数字
 */
var containsDuplicate = function (nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) return true;
  }
  return false;
};

/**
 * 用 Set 来存储
 *
 */
// var containsDuplicate = function (nums) {
//     let newSet = new Set();
//     for (let i = 0; i < nums.length; i++) {
//         if( newSet.has(nums[i]) ) return true;
//         newSet.add(nums[i])
//     }
//     return false;
// };

containsDuplicate([1, 2, 3, 4, 1]);
