function checkSubarraySum(nums: number[], k: number): boolean {
    // Initialize a map to store the modulo result and the index
    const modMap = new Map()
    modMap.set(0, -1) // For cases where subarray starts at index 0

    let cumulativeSum = 0

    for (let i = 0; i < nums.length; i++) {
        // Update cumulative sum
        cumulativeSum += nums[i]

        // Calculate the current remainder when cumulative sum is divided by k
        let remainder = cumulativeSum % k

        // If remainder is negative, adjust to be within [0, k-1]
        if (remainder < 0) remainder += k

        // Check if this remainder has been seen before
        if (modMap.has(remainder)) {
            const prevIndex = modMap.get(remainder)
            // Ensure the subarray length is at least 2
            if (i - prevIndex > 1) {
                return true
            }
        } else {
            // Store the remainder with the current index
            modMap.set(remainder, i)
        }
    }

    // No valid subarray found
    return false
}
