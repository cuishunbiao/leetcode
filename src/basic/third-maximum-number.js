/**
 * @param {number[]} nums
 * @return {number}
 */
// var thirdMax = function (nums) {
//     //去重并且排序
//     let _nums = [...new Set(nums)].sort((a, b) => b - a)
//     return _nums.length > 2 ? _nums[2] : _nums[0];
// };

var thirdMax = function (nums) {
  //先存储三个值，one/two/three
  if (!nums.length) return;
  if (nums.length < 3) {
    return Math.max(...nums);
  }
  let one, two, three;
  for (let item of nums) {
    if (item > one || one === undefined) {
      three = two;
      two = one;
      one = item;
    } else if (item < one && (item > two || two === undefined)) {
      three = two;
      two = item;
    } else if (item < two && (item > three || three === undefined)) {
      three = item;
    }
  }
  if (three !== undefined) return three;
  return one;
};

console.log(thirdMax([2, 2, 3, 1]));
