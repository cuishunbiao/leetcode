/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const mergeArr = nums1.concat(nums2);
    const result = mergeArr.sort((a, b) => a - b)
    if (result.length === 1) return result[0]
    //双指针计算数组
    let len = (result.length - 1) / 2;
    //如果是整数
    if (len % 1 === 0) {
        return result[len]
    } else {
        const smallNumber = Math.floor(len);
        const bigNumber = Math.ceil(len);
        return (result[smallNumber] + result[bigNumber]) / 2
    }
};
console.log(findMedianSortedArrays([1, 3], [2, 4]));
