
function findDisappearedNumbers(nums) {
    const len = nums.length;
    const numSet = new Set(nums);
    const result = []
    for (let i = 1; i <= len; i++) {
        if (!numSet.has(i)) {
            result.push(i)
        }
    }
    return result
};
const numsArr = [4, 3, 2, 7, 8, 2, 3, 1]
console.log(findDisappearedNumbers(numsArr))

