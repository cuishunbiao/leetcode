/**
 * @param {number[][]} intervals
 * @return {number[][]}
 * 
 * 定义两个下标是肯定的「left right」
 * 
 * 
 * 
 */
var merge = function (intervals) {
    if (!intervals.length) return;
    if (intervals.length === 1) return intervals
    intervals.sort((a, b) => a[0] - b[0]);
    const len = intervals.length;
    const newArr = [intervals[0]]
    for (let i = 1; i < len; i++) {
        let lastMerged = newArr[newArr.length - 1]
        if (lastMerged[1] >= intervals[i][0]) {
            lastMerged[1] = Math.max(lastMerged[1], intervals[i][1])
        } else {
            newArr.push(intervals[i])
        }
    }
    return newArr
    // if (!intervals.length) return;
    // if (intervals.length === 1) return intervals
    // intervals.sort((a, b) => a[0] - b[0]);
    // const len = intervals.length;
    // const itemLen = intervals[0].length - 1;
    // const newArr = [intervals[0]]
    // let left = 0;
    // let right = 1
    // while (right < len) {
    //     if (newArr[left][itemLen] >= intervals[right][0]) {
    //         const min = Math.min(newArr[left][0], intervals[right][0])
    //         const max = Math.max(newArr[left][itemLen], intervals[right][itemLen])
    //         newArr[left] = [min, max]
    //         right++;
    //         continue;
    //     }
    //     newArr.push(intervals[right])
    //     left++;
    //     right++;
    // }
    // return newArr
};
const intervals = [[1, 4], [0, 0]]
console.log(merge(intervals))