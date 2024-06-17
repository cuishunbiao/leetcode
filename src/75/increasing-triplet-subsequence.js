/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
    // number = 0
    // 定义两个指针，j 比 i 多 1，如果
    // j > i 则加 1，否则 result push 入数组，最终 Math.max()
    // 继续 j++ 和 i++；

    if (nums.length < 3) return false
    const cache = []
    let number = 1

    for (let i = 0, j = 1; j < nums.length; ) {
        if (nums[j] > nums[i]) {
            number++
        } else {
            cache.push(number)
            number = 1
        }
        j++
        i++
    }
    number && cache.push(number)

    return Math.max(...cache) >= 3
}

console.log(increasingTriplet([20, 100, 10, 12, 5, 13]))

// Example 1:

// Input: nums = [1,2,3,4,5]
// Output: true
// Explanation: Any triplet where i < j < k is valid.
// Example 2:

// Input: nums = [5,4,3,2,1]
// Output: false
// Explanation: No triplet exists.
// Example 3:

// Input: nums = [2,1,5,0,4,6]
// Output: true
// Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.
