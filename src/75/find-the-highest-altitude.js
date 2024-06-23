/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
    let maxNumber = 0;
    let current = 0
    for (let i of gain) {
        current += i
        maxNumber = Math.max(current, maxNumber)
    }
    return maxNumber
};
const gain = [-4, -3, -2, -1, 4, 3, 2]
console.log(largestAltitude(gain))