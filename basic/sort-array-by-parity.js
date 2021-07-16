/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var sortArrayByParity = function (nums) {
//     let numsLists = [];
//     //取余2为0，则向前unshift；取余2为1，则push
//     for (let num of nums) {
//         if (num % 2 === 0) {
//             numsLists.push(num)
//         }else{
//             numsLists.unshift(num)
//         }
//     }
//     return numsLists
// };
var sortArrayByParity = function (nums) {
    //维护两个指针 i 和 j
    let i = 0;
    let j = nums.length - 1
    //第一指针小于第二个指针的时候，进入循环体
    while (i < j) {
        const inum = nums[i] % 2;
        const jnum = nums[j] % 2
        if (inum > jnum) {
            //也就是 1 > 0 i下标是奇数，j下标是偶数
            const tmp = nums[i]
            nums[i] = nums[j]
            nums[j] = tmp
        }
        if (inum === 0) i++
        if (jnum === 1) j--
    }
    return nums
};

console.log(sortArrayByParity([3, 1, 2, 4]));