/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 * 
 * 求出两组数字，a = 1, b = 0; abba = 1001; ab = 10
 * 最后判断数字是否相等
 * 
 */
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

};

console.log(wordPattern("e", "eukera"));