/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 * [2, 7, 11, 15]
 *
 */
// var twoSum = function (numbers, target) {
//     let index1 = 0;
//     while (index1 < numbers.length - 1) {
//         for (let i = (index1 + 1); i < numbers.length; i++) {
//             if (target - numbers[index1] === numbers[i]) {
//                 return [++index1, ++i]
//             }
//         }
//         index1++
//     }
// };

var twoSum = function (numbers, target) {
  let leftIndex = 0,
    rightIndex = numbers.length - 1;
  for (let i = 0; i < numbers.length; i++) {
    let _num = numbers[leftIndex] + numbers[rightIndex];
    if (_num === target) {
      return [++leftIndex, ++rightIndex];
    }
    if (_num > target) {
      rightIndex--;
    } else if (_num < target) {
      leftIndex++;
    }
  }
};

// console.log(twoSum([2, 10, 11, 15], 26))
console.log(twoSum([0, 0, 3, 4], 0));
