/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    k = k % nums.length; // Handle cases where k > nums.length
    if (k === 0) return;

    // Create a temporary array to store the rotated elements
    const temp = nums.slice(-k)

    // Shift the remaining elements
    for (let i = nums.length - 1; i >= k; i--) {
        nums[i] = nums[i - k]
    }

    // Place the rotated elements at the beginning
    for (let i = 0; i < k; i++) {
        nums[i] = temp[i]
    }
    return nums
};
const nums = [1, 2, 3, 4, 5, 6, 7], k = 3
console.log(rotate(nums, k));