/**
 * @param {number[]} nums
 * @return {number}
 * 生成一个 0-n 的数组；
 * nums 的数组，排序；
 * 定义两个下村，遍历，如果 i 和 j 的内容不相等，就返回 j 的 value 值
 */

var missingNumber = function (nums) {
    const oldResult = nums.reduce((prev, next) => prev + next, 0)
    const newNums = Array.from(new Array(nums.length + 1).keys())
    const newResult = newNums.reduce((prev, next) => prev + next, 0)
    return newResult - oldResult
};

// var missingNumber = function (nums) {
//     if (nums.length === 1) {
//         return nums.length - nums[nums.length - 1]
//     }
//     nums.sort((a, b) => a - b)
//     let current = 0;
//     debugger
//     for (let i = 1; i < nums.length; i++) {
//         const currentResult = current + 1
//         if (currentResult != nums[i] ){
//             return currentResult
//         } else {
//             current = currentResult
//         }
//     }
//     return nums.length
// };
console.log(missingNumber([9,6,4,2,3,5,7]));
