/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    // 技巧很巧妙
    const answer = new Array(nums.length).fill(1)
    let leftProduct = 1
    for (let i = 0; i < answer.length; i++) {
        answer[i] = leftProduct
        leftProduct *= nums[i]
    }
    let rightProduct = 1
    for (let j = answer.length - 1; j >= 0; j--) {
        answer[j] *= rightProduct
        rightProduct *= nums[j]
    }
    return answer;
}
const nums = [1, 2, 3, 4]
console.log(productExceptSelf(nums));