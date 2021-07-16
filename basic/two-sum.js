
// var nums = [3, 5, 6, 8];
// var target = 11;

// var twoSum = function (nums, target) {
//     //nums 整数数组需要依次遍历，获取下标0，去找下标1下标2... 最后算出 target 是否相等。
//     //计算完，需要向前移动一个下标
//     let _result = [];
//     for (let currentIndex = 0; currentIndex < nums.length; currentIndex++) {
//         nums.forEach((_, index) => {
//             let _nums = nums[currentIndex] + nums[currentIndex + index + 1];
//             if (_nums === target) {
//                 _result = [currentIndex, currentIndex + index + 1]
//             }
//         })
//     }
//     return _result
// };

var nums = [3, 5, 6, 8];
var target = 11;

var twoSum = function (nums, target) {
    let _result = [];
    for (let currentIndex = 0; currentIndex < nums.length; currentIndex++) {
        let _num = target - nums[currentIndex];
        nums.forEach((item, index) => {
            if (currentIndex >= index) return;
            if (item === _num) {
                _result = [currentIndex, index];
            }
        })
        if( _result.length ){
            break;
        }
    }
    return _result
};

twoSum(nums, target);