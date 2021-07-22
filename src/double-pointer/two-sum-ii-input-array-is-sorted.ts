/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 * 1.声明两个指针，slow 和 fast；
 * 2.target的值减去 slow 的值，剩余值和 fast 的循环去对比，如果相等，slow 和 fast 的值加 1 并返回；
 * 3.如果值没有匹配，slow 的值加 1，fast 的值加 1；
 * 看完题解；
 * 这是升序数组。
 * 1.slow 和 fast 的值相加
 * 2.大于 target，右侧的值需要缩小去匹配；
 * 3.小于 target，左侧 slow 需要前进匹配；
 * 
 */
var twoSum = function(numbers, target) {
    let leftIndex = 0, rightIndex = numbers.length - 1;
    while (leftIndex < rightIndex) {
        const result = numbers[leftIndex] + numbers[rightIndex]; // 先计算出总数；
        if (target === result) {
            return [leftIndex+1, rightIndex+1]
        }
        if (target > result) {
            leftIndex++;
        } else {
            rightIndex--;
        }
    }
    return false;
};
console.log(twoSum([2,7,11,15], 9))