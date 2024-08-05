/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 
 * 拿着 4 个值向前跑，i 和 j，
 * 写一个计算方法，循环调用；
 * 值存入数组；
 * 
 */
var findMaxAverage = function(nums, k) {
    if (nums.length < k) return 0
    let count = 0
    let ave = -Infinity
    for (let left = 0, right = 0; right < nums.length; right++){
        count += nums[right]
        if (right+1 >= k) {
            ave = Math.max(ave, count / k)
            count -= nums[left]
            left++
        }
    }
    return ave
};

const nums = [-1], k = 1
console.log(findMaxAverage(nums, k))