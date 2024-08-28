/**
 * @param {number[]} nums
 * @return {number[][]}
 * 
 * 因为要计算三个值的和，所以最少需要三个下标，并且需要找到每个元素与之对应的其他两个元素，理论上是 O(n^3)
 * 1. 先排序
 * 2. 定义三个下标，以 i 为主，每次都生成一个 left（i+1） 和 right(nums.leng-1) 下标；
 * 3. 当三个值相加得 0 时，说明找到了三个元素，加入 result 数组里，并且同时移动 left 和 right；
 * 4. 当三个值相加小于 0 时，说明 left 数小，需要继续加大，则 left+1;
 * 5. 当三个值相加大于 0 时，说明 right 数大，需要继续减小，则 right-1;
 * 6. 当 left 遇到 right 的时候，退出 while 循环，继续执行 for 循环。
 */
var threeSum = function (nums) {
    const sortNums = nums.sort((a, b) => a - b)
    const result = new Set();
    for (let i = 0; i < sortNums.length - 2; i++) {
        let left = i + 1, right = nums.length - 1
        while (left < right) {
            const val = nums[i] + nums[left] + nums[right]
            if (val === 0) {
                if (result.has([nums[i], nums[left], nums[right]])) {
                    result.add([nums[i], nums[left], nums[right]])
                }
                left++;
                right--;
            } else if (val < 0) {
                left++;
            } else if (val > 0) {
                right--;
            }
        }
    }
    return result
};
const nums = [-1, 0, 1, 2, -1, -4]
console.log(threeSum(nums))