/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    const newMap = new Map()
    const result = []
    let listMap = [], secondMap = []
    if (nums1.length > nums2.length) {
        listMap = nums1
        secondMap = nums2
    } else {
        listMap = nums2
        secondMap = nums1
    }
    for (let i = 0; i < listMap.length; i++) {
        if (newMap.get(listMap[i])) {
            newMap.set(listMap[i], newMap.get(listMap[i]) + 1)
        } else {
            newMap.set(listMap[i], 1)
        }
    }
    for (let j = 0; j < secondMap.length; j++) {
        if (newMap.has(secondMap[j]) && newMap.get(secondMap[j]) >= 1) {
            newMap.set(secondMap[j], newMap.get(secondMap[j]) - 1)
            result.push(secondMap[j])
        }
    }
    return result
};
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
