/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 
 */
var searchRange = function (nums, target) {
    // Find first result 
    const findFirst = (nums, target) => {
        let left = 0, right = nums.length - 1, first = -1
        while (left <= right) {
            let mid = Math.floor((left + right) / 2)
            if (nums[mid] === target) {
                first = mid; // if find result, continue find last left number;
                right = mid - 1;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return first;
    }
    // Find last position number;
    const findLast = (nums, target) => {
        let left = 0; right = nums.length - 1, last = -1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2)
            if (nums[mid] === target) {
                last = mid;
                left = mid + 1;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return last
    }
    const first = findFirst(nums, target)
    const last = findLast(nums, target)
    return [first, last]
};
const nums = [5, 7, 7, 8, 8, 10], target = 8
console.log(searchRange(nums, target));