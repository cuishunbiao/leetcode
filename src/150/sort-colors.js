/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 
 * Defined copy newNums, every value is 1;
 * loop nums, Defined two point, left and right,
 * if (nums[i] === 0) then newNums[left] = 0;
 * if (nums[i] === 2) then newNums[right] = 2;
 * return newNums
 */
var sortColors = function (nums) {
    let left = 0, right = nums.length - 1, i = 0;
    while (i <= right) {
        console.log(nums[i])
        if (nums[i] === 0) {
            [nums[i], nums[left]] = [nums[left], nums[i]]
            left++;
            i++;
        } else if (nums[i] === 2) {
            [nums[i], nums[right]] = [nums[right], nums[i]]
            right--;
        } else {
            i++
        }
    }
    // let left = 0, right = nums.length - 1, i = 0;
    // let newNums = new Array(nums.length).fill(1)
    // while (i < nums.length) {
    //     if (nums[i] === 0) {
    //         newNums[left] = 0;
    //         left++;
    //     } else if (nums[i] === 2) {
    //         newNums[right] = 2;
    //         right--;
    //     }
    //     i++;
    // }
    // return newNums
};
const nums = [0, 0, 2, 1, 1, 2]
console.log(sortColors(nums));