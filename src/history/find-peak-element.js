/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    let left = 0;
    let right = nums.length - 1;

    let maxIndex = 0;
    while (left <= right) {
        const leftResult = nums[left]
        const rightResult = nums[right]
        if (leftResult < rightResult) {
            maxIndex = right;
            left++
        } else if (leftResult > rightResult) {
            maxIndex = left;
            right--
        } else {
            maxIndex = left
            left++;
        }
    }
    return maxIndex;
};
const nums = [2, 1, 2]
console.log(findPeakElement(nums))