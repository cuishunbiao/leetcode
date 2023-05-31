/**
 * @param {number[]} nums
 * @return {number}
 * nums = [1,1,0,1,1,1] = 3
 * nums = [1,0,1,1,0,1] = 2
 */
var findMaxConsecutiveOnes = function (nums) {
    let current = 0
    let maxNumber = 0
    for (let num of nums) {
        if (num === 1) {
            current++
        } else {
            maxNumber = Math.max(maxNumber, current)
            current = 0
        }
    }
    return Math.max(maxNumber, current)
};
console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]))