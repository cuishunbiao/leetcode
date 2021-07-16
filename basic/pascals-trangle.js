/**
 * @param {number} numRows
 * @return {number[][]}
 */
// var generate = function (numRows) {
//     let nums = [];
//     for (let i = 0; i < numRows; i++) {
//         let arr = [];
//         for (let j = 0; j <= i; j++) {
//             if( j === 0 || j === i ){
//                 arr.push(1);
//             }else{
//                 arr[j] = nums[i - 1][j - 1] + nums[i - 1][j];
//             }
//         }
//         nums.push(arr)
//     }
//     return nums;
// };


var generate = function (numRows) {
    let nums = [];
    for (let i = 0; i < numRows; i++) {
        let arr = new Array(i + 1).fill(1);
        for (let j = 1; j < i; j++) {
            arr[j] = nums[i - 1][j - 1] + nums[i - 1][j];
        }
        nums.push(arr)
    }
    return nums;
};

generate(13);