function twoSum(nums, target) {
    if (nums.length <= 1) return []

    const result = new Map()
    for (let i = 0; i < nums.length; i++){
        const value = target - nums[i]
        if (result.has(value)) {
            return [result.get(value), i]
        } else {
            result.set(nums[i], i)
        }
    }
    return []
};

const nums = [2, 7, 11, 15], target = 9
twoSum(nums, target)