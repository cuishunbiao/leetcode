/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 * 
 */
var canPlaceFlowers = function (flowerbed, n) {

    // const first = flowerbed[0] === 0
    // const second = flowerbed[1] === 0
    // if (first && second) {
    //     debugger
    //     n -= 1;
    //     flowerbed[0] = 1
    // }

    for (let i = 0; i < flowerbed.length; i++){
        // if prev value is 0 and next value is 0, then placed flower
        const current = flowerbed[i] === 0
        const left = flowerbed[i - 1] ? flowerbed[i - 1] === 0 : true
        const right = flowerbed[i + 1] ? flowerbed[i + 1] === 0 : true
        if (current && left && right) {
            n -= 1;
            flowerbed[i] = 1
        }
    }
    return n <= 0
};
const flowerbed = [0,0,0,0,1], n = 2
console.log(canPlaceFlowers(flowerbed,n))
