/**
 * @param {string} s
 * @return {number}
 * 只要涉及到求次数的，基本上先想到 hash
 * 循环两次，第一次收进 Map对象里，设置值为 当前下标，如果第二次又访问到了，更改值为 -1
 * 第二次，遍历寻找第一个值不等于 -1 的值
 */
var firstUniqChar = function (s) {
    let i = 0;
    let sMap = new Map();
    if( !s.length ) return -1
    if( s.length === 1 ) return 0
    // for(let item of Array.from(s).entries()){
    for(let item of s){
        if (sMap.has(item) ){
            sMap.set(item, -1)
        }else{
            sMap.set(item, i)
        }
        i++
    }
    for( let [key,value] of sMap){
        if( value !== -1 ) return value
    }
    return -1;
};
firstUniqChar('z')