/**
 * @param {number[]} nums
 * @return {number}
 * 输入：nums = [10,9,2,5,3,7,101,18]
   输出：4
   解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
 */
// var lengthOfLIS = function (nums) {
//     if (!nums.length) return 0
//     let result = 0
//     let newArr = new Array(nums.length).fill(1)
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = 0; j < i; j++) {
//             if (nums[j] < nums[i]) {
//                 newArr[i] = Math.max(newArr[i], newArr[j] + 1)
//             }
//         }
//         result = Math.max(result, newArr[i])
//     }
//     return result
// };

/**
 * 获取当前数的值，遍历前面的值，是否有比当前数小的。
 * 1.遍历出比 news[i] 前面小的值有几个；
 * 2.后面的 newArr[i] 算前面小的值的时候就相加上就可以
 * 
 */
var lengthOfLIS = function (nums) {
    let lis = []
    for (let i = 0; i < nums.length; i++) {
        lis.push(1)
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) lis[i] = Math.max(lis[i], lis[j] + 1)
        }
    }
    return nums.length ? Math.max.apply(null, lis) : 0
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]))