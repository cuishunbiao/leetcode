/**
 * @param {number[]} nums
 * @return {number}
 */
// var majorityElement = function(nums) {
//     let newNums = new Map();
//     nums.forEach(item => {
//         if (newNums.has(item)) {
//             const a = newNums.get(item);
//             newNums.set(item,(a + 1))
//         } else {
//             newNums.set(item, 1)
//         }
//     })
//     let currentValue = 0;
//     let currentkey;
//     newNums.forEach((value, key) => {
//         if (value > currentValue) {
//             currentValue = value
//             currentkey = key
//         }
//     })
// };
var majorityElement = function(nums) {
    nums.sort((a, b) => a - b);
    return nums[nums.length / 2]
};
majorityElement([1,1,1,2,2,2,3,3,3,3])