/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let firstNum = Infinity;
    let secoundNum = Infinity;
    
    for(let currentNum of nums){
    
        if(currentNum > secoundNum){
            return true;
        }
    
        if(currentNum > firstNum){
            secoundNum = currentNum;
        }else{
            firstNum = currentNum
        }
    }
    return false;
};

console.log(increasingTriplet([1,1,-2,6]))

// Example 1:

// Input: nums = [1,2,3,4,5]
// Output: true
// Explanation: Any triplet where i < j < k is valid.
// Example 2:

// Input: nums = [5,4,3,2,1]
// Output: false
// Explanation: No triplet exists.
// Example 3:

// Input: nums = [2,1,5,0,4,6]
// Output: true
// Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.
