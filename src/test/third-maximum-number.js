/**
 * @param {number[]} nums
 * @return {number}
 * 数组 sort 去重排序；
 * 取倒数第 3 个；
 * 
 */
var thirdMax = function (nums) {
    //先倒序排列，最大的在最前面
    const _nums = Array.from(new Set(nums)).sort((a, b) => {
        return b - a;
    });
    //如果数组长度小于3，那就返回第一个最大的数，否则返回第3个数字
    return _nums.length < 3 ? _nums[0] : _nums[2]
};
console.log(thirdMax([1,1,2]))