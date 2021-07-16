/**
 * @param {number[]} nums
 * @return {number[]}
 * 
 * 1、数组里面不会出现 0；
 * 2、如果有重复数字，说明会有短缺的数字；重复3个短缺3个，重复4个短缺4个；
 * 3、最大数是数组长度
 * 
 * 解：
 * 先拿到数组最大长度：nums.length
 * 头尾指针？
 * 数组的下标+1，就是对应的值
 * 先创建一个长度一样的数组；填充 1-n；
 * 遍历所有数字，去删除上面生成数组的下标。
 * 遍历完，剩下的就是缺失的数字
 * 
 */
// var findDisappearedNumbers = function (nums) {
//     let arr = [...Array(nums.length).keys()].map(item => item += 1)
//     for (let i = 0; i < nums.length; i++) {
//         arr[nums[i] - 1] = ''
//     }
//     return arr.filter(Boolean)
// };


// var findDisappearedNumbers = function (nums) {
//     //先把数字放到对应的位置上；
//     const n = nums.length;
//     for (const num of nums) {
//         nums[num - 1] += n;
//     }
//     return nums
//     // const ret = [];
//     // for (const [i, num] of nums.entries()) {
//     //     if (num <= n) {
//     //         ret.push(i + 1);
//     //     }
//     // }
//     // return ret;
// };

var findDisappearedNumbers = function (nums) {
    //先循环一次数组，加上最大长度。因为题目里的数据格式为[1,2,3,4,5,6,7,8]，假设数组长度是多少，里面的数字就是怎样排列的。
    //关键点在于：取余。在循环中，前面的数字会改变后面数字的值，当想获取到原来的值，就需要取余数，加的几，取余数就是几。这样可以得到原来的数。
    let n = nums.length;//定义余数
    for (let num of nums) {
        //获取下标
        const x = (num - 1) % n;
        nums[x] += n
    }
    let arr = []
    for (let [index, result] of nums.entries()) {
        if (result <= n) {
            arr.push(index + 1)
        }
    }
    return arr
}

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]))
//[4, 3, 2, 7, 8, 2, 3, 1]
//[1, 2, 3, 4, 5, 6, 7, 8]