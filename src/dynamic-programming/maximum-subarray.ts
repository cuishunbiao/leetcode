const maxSubArray = (nums) => {
    if (nums.length === 0) return 0
    if (nums.length === 1) return nums[0]
    let pre = 0, maxAns = nums[0];
    nums.forEach(element => {
        pre = Math.max(pre + element, element);
        maxAns = Math.max(maxAns, pre)
    });
    return maxAns
}
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))