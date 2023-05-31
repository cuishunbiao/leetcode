/**
 * @param {number[]} nums
 * @return {number[]}
 * 给你一个含 n 个整数的数组 nums ，其中 nums[i] 在区间 [1, n] 内。请你找出所有在 [1, n] 范围内但没有出现在 nums 中的数字，并以数组的形式返回结果。
 * 输入：nums = [4,3,2,7,8,2,3,1]
 * 输出：[5,6]
 * 
 * 解：
 * 定义一个新的长度的 nums 的数组；
 * 共计两个数组，循环 nums 的数组，定义两个下标，i 和 j，每次都 +1，
 * 如果 i和j 的值相等，则继续循环，如果不相等，则 nums长度数组的下村加1；
 * 
 */
// var findDisappearedNumbers = function (nums) {
//     const _nums = [...new Set(nums.sort((a, b) => a - b))];
//     const len = nums.length;//拿到最大值，去生成新的数组；
//     //通过 Array.from 生成数组
//     let newNums = Array.from({ length: len }, (_, i) => i + 1);
//     let result = []
//     for (let i = 0, j = 0; j < newNums.length; i++){
//         if (newNums[i] != _nums[j]) {
//             result.push(newNums[i])
//         } else {
//             j++
//         }
        
//     }
//     return result
// };
var findDisappearedNumbers = function (nums) {
    const _nums = [...Array(nums.length).keys()].map(num=>num+1)
    console.log(_nums)
    for (let i = 0; i < nums.length; i++){
        _nums[nums[i] - 1] = ''
    }
    return _nums.filter(Boolean)
};
console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));