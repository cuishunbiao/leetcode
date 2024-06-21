/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
    // 每遍历一次，则把结果值 push 到数组里；
    const numss = nums.sort((a, b) => a - b)
    let number = 0
    let j = numss.length - 1
    for (let i = 0; i < j; ) {
        const vali = numss[i]
        const valj = numss[j]
        if (valj > k) {
            j--
            continue
        }
        const result = k - vali
        if (result === valj) {
            i++
            j--
            number++
            continue
        }
        if (result > valj) {
            i++
        } else {
            j--
        }
    }
    return number
}
const nums = [1, 2, 3, 4],
    k = 5
console.log(maxOperations(nums, k))
