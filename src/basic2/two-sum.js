/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    if (!nums.length) return 0
    const numsMap = new Map()
    debugger
    for (let i = 0; i < nums.length; i++) {
        const numsi = nums[i]
        if (numsMap.has(numsi)) {
            return [numsMap.get(numsi), i]
        } else {
            numsMap.set(target - numsi, i)
        }
    }
}
console.log(twoSum([3, 2, 4], 6))
