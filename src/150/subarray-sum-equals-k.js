/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    let count = 0;
    let sum = 0;
    let map = new Map();
    // Initialize the map with sum 0 occurring once
    map.set(0, 1)
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        // if (sum - k) is in the map, them there is a subarray ending at i that sum to k
        const key = sum - k
        if (map.has(key)) {
            count += map.get(key)
        }
        // Update the map with the current sum
        const result = (map.get(sum) || 0) + 1
        map.set(sum, result);
    }
    return count;
};
const nums = [1, 2, 3, -2, 5], k = 5
console.log(subarraySum(nums, k))