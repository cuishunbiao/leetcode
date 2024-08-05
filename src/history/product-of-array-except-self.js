/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const len = nums.length
    const left = new Array(len).fill(1)
    const right = new Array(len).fill(1)
    const answer = new Array(len).fill(1)

    left[0] = 1
    for (let i = 1; i < len; i++) {
        left[i] = left[i - 1] * nums[i - 1]
    }

    right[len - 1] = 1
    for (let j = len - 2; j >= 0; j--) {
        right[j] = right[j + 1] * nums[j + 1]
    }

    for (let k = 0; k < len; k++) {
        answer[k] = left[k] * right[k]
    }
    return answer
}

productExceptSelf([1, 2, 3, 4])
