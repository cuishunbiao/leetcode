/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let i = 0,
    j = 0;
  while (j < nums.length) {
    if (nums[j] !== val) {
      nums[i] = nums[j];
      i++;
    }
    j++;
  }
  nums.length = i;
  return nums;
};

removeElement([3, 2, 2, 3], 3);
