/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

const number = 2
var guess = function (num) {
    if (num > number) {
        return -1
    } else if (num < number) {
        return 1
    } else {
        return 0
    }
}
/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
    let left = 1;
    let right = n;
    while (left <= right) {
        const middle = left + Math.floor((right - left) / 2)
        const result = guess(middle)
        if (result === 0) {
            return middle
        } else if (result === 1) {
            left = middle + 1
        } else {
            right = middle - 1
        }
    }
};
const n = 3;
console.log(guessNumber(n));