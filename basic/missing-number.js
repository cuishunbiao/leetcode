/**
 * @param {number[]} nums
 * @return {number}
 * 先拿到数组长度
 */
var missingNumber = function (nums) {
    let sum = (nums.length + 1) * (nums.length / 2);
    let result = nums.reduce((prev, curr) => {
        return prev - curr
    }, sum)
    return result;
};
console.log(missingNumber([3, 0, 1]));