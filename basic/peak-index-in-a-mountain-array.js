/**
 * @param {number[]} arr
 * @return {number}
 * 如果数组长度小于3，则退出
 * 双指针，头尾各一个，尾减去头，要大于等于1，
 * 如果不大于等于1，那就比较两个数，返回大数的下标
 */
var peakIndexInMountainArray = function (arr) {
    if (arr.length < 3) return;
    let i = 0; j = arr.length - 1;
    while (i < j) {
        if ((j - i) === 1) {
            if (arr[j] > arr[i]) {
                return j
            } else {
                return i
            }
        }
        //判断两数大小，返回大数坐标
        if (arr[j] > arr[i]) {
            i++
        } else {
            j--
        }
    }
};
console.log(peakIndexInMountainArray([24, 69, 100, 99, 79, 78, 67, 36, 26, 19]));