/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 *
 * 先找到最大的数；
 * 遍历 candies 每个子项 和 extraCandies 相加；
 * 结果大于或者等于最大数，则新数组添加子项 true；
 * 结果小于最大数，则新数组添加子项 false；
 */
var kidsWithCandies = function (candies, extraCandies) {
    if (!candies.length) return
    const maxNumber = Math.max(...candies)
    for (let i = 0; i < candies.length; i++) {
        const currentNumber = candies[i] + extraCandies
        if (currentNumber >= maxNumber) {
            candies[i] = true
        } else {
            candies[i] = false
        }
    }
    return candies
}
console.log(kidsWithCandies([2, 3, 5, 1, 3], 3))
