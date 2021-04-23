/**
 * @param {string} s
 * @return {number}
 * 
 */
var firstUniqChar = function (s) {
    let i;
    let sArr = new Map();
    if( !s.length ) return -1
    if( s.length === 1 ) return s
    for(let item of s){
        debugger
        if (sArr.has(item) ){
            let num = sArr.get(item)
            sArr.set(item, num++)
        }else{
            sArr.set(item,1)
        }
    }
};
console.log(firstUniqChar('leetcode'));