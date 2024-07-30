/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function (spells, potions, success) {
    const arr = []
    for (let i of spells) {
        let arrsub = 0
        const potionsSort = potions.sort((a, b) => a - b)


        // 定义左右两个值
        let left = 0;
        let right = potions.length;
        while (right >= left) {
            let middle = left + Math.floor(((right - left) / 2))
            if (potions[middle] > success) {

            }
        }
        // for (let j of potions) {
        //     const result = i * j
        //     if (result >= success) {
        //         arrsub++
        //     }
        // }
        arr.push(arrsub)
    }
    return arr
};

const spells = [3, 1, 2], potions = [8, 5, 8], success = 16
console.log(successfulPairs(spells, potions, success));