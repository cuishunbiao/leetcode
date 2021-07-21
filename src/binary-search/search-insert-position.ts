/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 
 * 定义三个值 left,middle,right
 * 
 */
var searchInsert = function(nums, target) {
    let left = 0, right = nums.length - 1, middle;
    while (left <= right) {
        middle = Math.floor(left + (right - left) / 2)
        if (nums[middle] === target) {
            return middle
        }
        if (nums[left] < target) {
            left += 1
        } else {
            right -= 1
        }
    }
    return left;
};

console.log(searchInsert([1,3,5,6], 0))