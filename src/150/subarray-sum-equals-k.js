/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    let count = 0;
    let sum = 0;
    let map = new Map();
    debugger
    // Initialize the map with sum 0 occurring once
    map.set(0, 1)
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        // if (sum - k) is in the map, them there is a subarray ending at i that sum to k
        if (map.has(sum - k)) {
            count += map.get(sum - k)
        }
        // Update the map with the current sum
        map.set(sum, (map.get(sum) || 0) + 1);
    }
    return count;
};
const nums = [1, -1, 0], k = 0
console.log(subarraySum(nums, k))