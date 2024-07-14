/**
 * @param {number[]} nums
 * @return {number}
 * 
 * 要分解任务；
 * [1] = nums[0]
 * [1,2] = Math.max(n-1,n-2) = 2
 * [1,2,3] = nums[i] + Math.max(n+2, n+3);
 * 
 * 
 * n+1 / n+2 = 
 * dp[i]=max(dp[i−1],dp[i−2]+nums[i])
 * 
*/
var rob = function (nums) {
    const len = nums.length
    if (len === 0) return 0
    if (len === 1) return nums[0]

    let prevPrevMax = nums[0]; // 第一个房子的金额；
    let prevMax = Math.max(nums[0], nums[1]); // 第一个和第二房子的最大金额；

    for (let i = 2; i < len; i++) {
        let currentMax = Math.max(prevMax, prevPrevMax + nums[i]);
        prevPrevMax = prevMax;
        prevMax = currentMax; // 最大的数存在这里；
    }
    return prevMax;
};

const nums = [1, 2, 3, 1]
rob(nums)