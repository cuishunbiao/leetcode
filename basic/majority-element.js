/**
 * @param {number[]} nums
 * @return {number}
 */
// var majorityElement = function (nums) {
//     let newObject = {}
//     let maxNumbers = 0;
//     let maxNumbersIndex = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if( newObject[nums[i]] ){
//             newObject[nums[i]] = ++newObject[nums[i]];
//             if( newObject[nums[i]] > (nums.length / 2) ){
//                 break;
//             }
//         }else{
//             newObject[nums[i]] = 1;
//         }
//     }
//     for(let j of Object.keys(newObject)){
//         if( newObject[j] > maxNumbers ){
//             maxNumbers = newObject[j]
//             maxNumbersIndex = j;
//         }
//     }
//     return maxNumbersIndex
// };

/**
 * 寻找众数
 * 前提条件是，相同的数多于 n/2 的个数；
 * 以第一个数为开始，记数为 1；
 * 遇到相同的数则加1，遇到不同的数减1。
 * 如果减到0了，下一次遇到的数，就可以换了。说明目前这个数有可能不是最多的数。
 * 需要理解：n/2个数，是最少占到总数量的一半的，所以最终结果一定是正数。
 */
var majorityElement = function (nums) {
    let currentNumber = nums[0];
    let numCount = 0;
    nums.forEach(item=>{
        //如果后面的数和前面的相等
        if( currentNumber === item ){
            numCount++;
        }else{
            numCount--;
            //如果总计数为0，那说明当前统计的值需要更换一个
            if( numCount < 0 ){
                currentNumber = item;
                numCount = 0;
            }
        }
    })
    return currentNumber;
};

console.log(majorityElement([2,2,1,3,1,1,4,1,1,5,1,1,6]))