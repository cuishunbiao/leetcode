/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 
 * 滑动窗口
 * right 一直向前跑；
 * 遇到 1 count +1；
 * 如果遇到 0，
 *  k 如果不等于 0，则计数器 count 加 1,并且 k -1；
 *  k 如果等于 0，说明已经最大 0 了。计数器-1，left +1;
 * 
 * 并且 left + right +1；
 */
var longestOnes = function (nums, k) {

    let left = 0;
    let count = 0; //窗口内 1 的数量
    let maxLength = 0;
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 1) {
            count++;
        }
        while ((right - left + 1) - count > k) {
            if (nums[left] === 1) { count-- }
            left++
        }
        maxLength = Math.max(maxLength, right - left + 1)
    }
    return maxLength
};

const nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], k = 2
console.log(longestOnes(nums, k))
