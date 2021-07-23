/**
 * @param {string} s
 * @return {string}
 * 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
 * 输入："Let's take LeetCode contest"
 * 输出："s'teL ekat edoCteeL tsetnoc"
 * 1.将字符串按 空格 都转为 数组，形成二维数组，然后每个数组去执行反转操作；
 * 
 */
var reverseWords = function(s) {
    var reverseString = function(s) {
        let leftIndex = 0, rightIndex = s.length - 1;
        while (leftIndex < rightIndex) {
            [s[leftIndex],s[rightIndex]] = [s[rightIndex], s[leftIndex]]
            leftIndex++;
            rightIndex--;
        }
        return s.join('');
    };
    let nums = s.split(' ');
    for (let [index, num] of nums.entries()){
        nums[index] = reverseString(num.split(''))
    }
    return nums.join(' ')
};
console.log(reverseWords("Let's take LeetCode contest"))