/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let _map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (_map.has(nums[i]) && i - _map.get(nums[i]) <= k) {
      return true;
    }
    _map.set(nums[i], i);
  }
  return false;
};

//输入: nums = [1,2,3,1], k = 3
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
