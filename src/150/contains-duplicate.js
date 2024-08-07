/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    const numsResult = {}
    for (let num of nums) {
        if (numsResult[num]) {
            return true;
        } else {
            numsResult[num] = 1;
        }
    }
    return false
};
const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
console.log(containsDuplicate(nums));