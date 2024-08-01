/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
    let left = 1;
    let right = Math.max(...piles)

    function eatFn(mid) {
        return piles.reduce((prev, next) => {
            return prev += Math.ceil(next / mid)
        }, 0)
    }
    while (left < right) {
        const mid = Math.floor(left + (right - left) / 2)
        const eath = eatFn(mid)
        if (eath > h) {
            left = mid + 1;
        } else if (eath < h) {
            right = mid;
        } else {
            return mid
        }
    }
};
const piles = [3, 6, 7, 11], h = 8
console.log(minEatingSpeed(piles, h))

// Example 1:
// Input: piles = [3,6,7,11], h = 8
// Output: 4


// Example 2:
// Input: piles = [30,11,23,4,20], h = 5
// Output: 30


// Example 3:
// Input: piles = [30,11,23,4,20], h = 6
// Output: 23