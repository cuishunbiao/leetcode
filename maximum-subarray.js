/**
 * @param {number[]} nums
 * @return {number}
 * 
 * 1.先计算一个数的最大值
 * 2.计算两个数的最大值
 * 
 */

var maxSubArray = function (nums) {
    let pre = 0;
    let sum = nums[0];
    nums.forEach(item=>{
        console.log({
            'pre':pre,
            'sum':sum,
            'item':item
        })
        debugger
        pre = Math.max(pre+item,item);
        sum = Math.max(sum,pre)
    })
    return sum;
};




console.log(maxSubArray([1,2,-1,5,-1,2,4]));