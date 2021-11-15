const maxSubArray = (nums) => {
    let pre = 0, maxAns = nums[0]
    nums.forEach(item => {
        pre = Math.max(pre + item, item)
        maxAns = Math.max(pre, maxAns)
    });
    return maxAns
}
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))