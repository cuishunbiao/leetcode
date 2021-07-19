/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let currentNum = 0;
  let max = 0;
  for (let num of nums) {
    debugger;
    if (num === 1) {
      currentNum++;
    } else {
      max = Math.max(max, currentNum);
      currentNum = 0;
    }
  }
  return Math.max(max, currentNum);
};
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]));
