/**
 * @param {number[]} nums
 * @return {number}
 * 
 * 指针向前移动如果比刚才的数字大，就加1，如果小就赋值为0
 * 赋值为0的时候，向数组插入一个 子序列长度
 * 
 */
// var findLengthOfLCIS = function (nums) {
//     let result = [];
//     let current = nums[0];
//     let resultIndex = 1;
//     if (!nums.length) return 0;
//     if (nums.length === 1) return 1;
//     for (let [index, num] of nums.entries()) {
//         if (index === 0) continue;
//         if (num > current) {
//             resultIndex++;
//             current = num;
//             if (index === nums.length - 1) {
//                 result.push(resultIndex);
//             }
//         } else {
//             result.push(resultIndex);
//             resultIndex = 1;
//             current = num
//         }
//     }
//     return Math.max(...result)
// };

var findLengthOfLCIS = function (nums) {
    let count = 1;
    let result = 0;

    if (nums.length <= 1) return nums.length;

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i + 1] > nums[i]) {
            count++;
        } else {
            count = 1
        }
        result = result > count ? result : count;
    }
    return result
};

console.log(findLengthOfLCIS([2, 2, 2, 2, 2]))
console.log(findLengthOfLCIS([2, 3, 4, 6, 7]))
console.log(findLengthOfLCIS([1, 3, 7, 6, 7]))