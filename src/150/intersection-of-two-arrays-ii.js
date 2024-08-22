/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    // if nums1 and nums2 is empty, return empty array
    if (!nums1.length || !nums2.length) return []
    const map = new Map()
    for (let num of nums1) {
        map.set(num, (map.get(num) || 0) + 1)
    }
    const result = []
    for (let num2 of nums2) {
        const num2Res = map.get(num2)
        if (num2Res && num2Res > 0) {
            map.set(num2, map.get(num2) - 1)
            result.push(num2)
        }
    }
    return result
};
const nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4]
console.log(intersect(nums1, nums2));