
const guess = (a, b) => {
    if (a > b) {
        return -1
    } else if (a < b) {
        return 1
    } else {
        return 0
    }
}


function guessNumber(n) {
    let left = 1
    let right = n;
    while (left <= right) {
        let middle = left + Math.floor(((right - left) / 2)) // 防止越界
        const result = guess(middle, b)
        if (result === -1) {
            right = middle - 1
        } else if (result === 1) {
            left = middle + 1
        } else {
            return middle
        }
    }
}

const n = 1, b = 1
console.log(guessNumber(n))