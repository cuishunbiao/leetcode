/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 * 
 * 循环两个 map
 * 
 */
var findDifference = function (nums1, nums2) {
    const set1 = new Set(nums1)
    const set2 = new Set(nums2)

    const set1Result = [...set1].filter(i => !set2.has(i))
    const set2Result = [...set2].filter(i => !set1.has(i))

    return [set1Result, set2Result]
};
const nums1 = [1, 2, 3, 3], nums2 = [1, 1, 2, 2]
console.log(findDifference(nums1, nums2));