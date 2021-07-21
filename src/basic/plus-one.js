/**
 * @param {number[]} digits
 * @return {number[]}
 * 先反转一下数组，
 * 再遍历增加1；
 */
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] != 9) {
      digits[i]++;
      return digits;
    } else {
      digits[i] = 0;
    }
  }
  let result = [1, ...digits];
  return result;
};
plusOne([9, 9]);
