/**
 * @param {number[]} nums
 * @return {number[]}
 * 1.定义两个指针，一个为 0 一个为 n.length-1
 * 2.while 判断 leftPoint <= rightPonint 移动两个指针，当指针相同时做最后一次的数组存放；
 * 3.由于题目的规律，可以比较双端数 平方后 的大小，这样可以依次比较，存放到新的数组，存放的数组要倒序；
 * 4.如果平方后，左数比右数小，那就存放右数，右数比左数小，存放左数；
 * 5.存放数据后，相对应的 ponit 指针移动；
 */
var sortedSquares = function(nums) {
    let leftPoint = 0, len = nums.length, rightPoint = len - 1;
    let numsCopy = new Array(len);
    while (leftPoint <= rightPoint) {
        len--;
        const leftNumber = nums[leftPoint] * nums[leftPoint];
        const rightNumber = nums[rightPoint] * nums[rightPoint];
        if (leftNumber <= rightNumber) {
            numsCopy[len] = rightNumber;
            rightPoint--;
        } else {
            numsCopy[len] = leftNumber;
            leftPoint++;
        }
    }
    return numsCopy;
};
console.log(sortedSquares([-7,-3,2,3,11]))