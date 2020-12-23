/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    /**
     * 记录一个当前下标
     * 如果后面的元素和前面的元素重复的话，删除当前下标的值，如果不重复，继续前进
     *  */
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        console.log(nums);
        if( nums[i] !== nums[j] ){
            nums[i] = nums[j]
            i++;
        }
    }
    console.log(nums)
};

removeDuplicates([0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4]);