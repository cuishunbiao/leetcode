/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 * 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。
 * 不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。
 * 你可以假设数组中的所有字符都是 ASCII 码表中的可打印字符。
 * 
 * 1.定义两个指针，leftIndex 和 rightIndex；
 * 2.当 leftIndex 小于 rightIndex 的时候，进入循环，并且调换字符位置；
 * 
 * 两种方式：
 * 第一种方式：
 * numsCache = nums[0]
 * nums[0] = nums[nums.length - 1]
 * nums[nums.length - 1] = numsCache
 * 
 * 第二种方式：
 * [nums[0], nums[nums.length-1]] = [nums[nums.length-1], nums[0]]
 * 
 */
var reverseString = function(s) {
    let leftIndex = 0, rightIndex = s.length - 1;
    while (leftIndex < rightIndex) {
        [s[leftIndex],s[rightIndex]] = [s[rightIndex], s[leftIndex]]
        leftIndex++;
        rightIndex--;
    }
    return s;
};

console.log(reverseString(["h","e","l","l","o"]))
