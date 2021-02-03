/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    if (!nums.length) return
    let cache = k
    let result = 0
    for (let j = 0; j < nums.length; j++) {


        if (nums[j] === k) {
            result++;
            continue;
        }
        cache -= nums[j];
        if (cache === 0) {
            j--;
            result++;
            cache = k
            continue
        }
        if (cache > k) {
            cache = k
        }
    }
    return result
};
const nums = [-1, -1, 1], k = 0
console.log(subarraySum(nums, k))