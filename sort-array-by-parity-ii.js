/**
 * @param {number[]} nums
 * @return {number[]}
 * 延续之前的双指针策略，i 和 j 下标
 * 一次移动两个，如果都是奇数，
 */
// var sortArrayByParityII = function (nums) {
//     if (nums.length % 2 !== 0) return
//     let newNums = [], i = 0, j = 1;
//     for ([index, num] of nums.entries()) {
//         //偶数下标
//         if (num % 2 === 0) {
//             newNums[i] = num;
//             i += 2
//         } else {
//             newNums[j] = num;
//             j += 2
//         }
//     }
//     return newNums
// };


const swap = (A, i, j) => {
    const temp = A[i];
    A[i] = A[j];
    A[j] = temp;
};
var sortArrayByParityII = function (A) {
    const n = A.length;
    let j = 1;
    for (let i = 0; i < n; i += 2) {
        if (A[i] & 1) {
            while (A[j] & 1) {
                j += 2;
            }
            swap(A, i, j);
        }
    }
    return A;
};

sortArrayByParityII([1, 3, 4, 6, 5, 2])

// 下标0为偶数



