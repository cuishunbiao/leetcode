/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    if (nums.length < 2) return -1;
    const len = nums.length - 1
    let leftCount = 0
    let rightCount = nums[len];

    let left = 0;
    let right = len;
    let middle = -1
    while (left < right) {
        debugger
        if (leftCount === rightCount) {
            if (left + 1 === right) {
                middle = left;
            }
        }
        if (leftCount <= rightCount) {
            leftCount += nums[left]
            left++
        } else {
            right--
            rightCount += nums[right]
        }
    }
    return middle
};

const nums = [-1, -1, -1, -1, -1, 0]
console.log(pivotIndex(nums))