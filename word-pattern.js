/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 * 
 * 求出两组数字，a = 1, b = 0; abba = 1001; ab = 10
 * 最后判断数字是否相等
 * 
 */
<<<<<<< HEAD
// var wordPattern = function (pattern, s) {
//     let patternNum = '', sNum = ''
//     for (let code of pattern) {
//         if (code === 'a') {
//             patternNum += '1'
//         } else {
//             patternNum += '0'
//         }
//     }


//     let codeString = '', sArray = []
//     for (let code of s) {
//         if (code === ' ') {
//             sArray.push(codeString);
//             codeString = ''
//             continue;
//         }
//         codeString += code;
//     }
//     sArray.push(codeString);

//     for (let item of sArray) {
//         if (item === sArray[0]) {
//             sNum += '1'
//         } else {
//             sNum += '0'
//         }
//     }

//     if (patternNum === sNum) return true;
//     return false;
=======
var wordPattern = function (pattern, s) {
    let stackone = new Map();
    let stackTwo = new Map();
    let sArr = s.split(' ')
    if( pattern.length !== sArr.length ) return false;
    for (let [i, code] of sArr.entries()){
        const ch = pattern[i];
        if (stackone.has(code) && stackone.get(code) !== ch || stackTwo.has(ch) && stackTwo.get(ch) !== code ){
            return false;
        }
        stackone.set(code,ch)
        stackTwo.set(ch,code)
    }
    return true;
    // let patternNum = '', sNum = ''
    // for (let code of pattern) {
    //     if (code === 'a') {
    //         patternNum += '1'
    //     } else {
    //         patternNum += '0'
    //     }
    // }


    // let codeString = '', sArray = []
    // for (let code of s) {
    //     if (code === ' ') {
    //         sArray.push(codeString);
    //         codeString = ''
    //         continue;
    //     }
    //     codeString += code;
    // }
    // sArray.push(codeString);

    // for (let item of sArray) {
    //     if (item === sArray[0]) {
    //         sNum += '1'
    //     } else {
    //         sNum += '0'
    //     }
    // }

    // if (patternNum === sNum) return true;
    // return false;
>>>>>>> 389989511324efdf174e20a25c1aff3b25e65ddc

// };

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 * 先定义两种结构：一种以 pattern 为键 str 为值；
 * 一种以 str 为键 pattern 为值；
 * 循环对比
 * 
 */
 var wordPattern = function(pattern, s) {
    let patternMap = new Map()
    let stringMap = new Map()
    const sArr = s.split(' ');//先把传进来的 s 切割成数组去比较是否和字符串长度一致，不一致，则返回 false
    if( pattern.length !== sArr.length ) return false
    //先把对应表添加到各自的 Map 里面去
    for(let [i,item] of sArr.entries()){
        if( (stringMap.has(item) && stringMap.get(item) !== pattern[i]) || (patternMap.has(pattern[i]) && patternMap.get(pattern[i]) !== item ) ){
            return false;
        }
        stringMap.set(item,pattern[i])
        patternMap.set(pattern[i],item)
    }
    return true
};
console.log(wordPattern("abba", "dog dog dog dog"));