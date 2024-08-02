/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    if (nums.length < k) return null;

    const heap = []

    for (let num of nums) {
        // 加入值
        if (heap.length < k) {

        }
    }
};
const nums = [3, 2, 1, 5, 6, 4], k = 2
console.log(findKthLargest(nums, k))