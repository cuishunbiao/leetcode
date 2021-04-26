/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * 先获取 l1 和 l2 的长度，长度相加，做循环
 * 一个一个对比，如果l1的[index]比缓存的l2[index]的小，则进入数组
 * 
 * 2.合并数组，sort
 */
// var mergeTwoLists = function (l1, l2) {
//     const len = l1.length + l2.length
//     let result = [],l1Index = 0,l2Index = 0;
//     for (let num = 0; num < len ; num++) {
//         if (!l1[l1Index] ){
//             result[num] = l2[l2Index]
//             continue;
//         }
//         if (!l2[l2Index] ){
//             result[num] = l1[l1Index]
//             continue;
//         }
//         if (l1[l1Index] < l2[l2Index]){
//             result[num] = l1[l1Index]
//             l1Index++
//         }else{
//             result[num] = l2[l2Index]
//             l2Index++
//         }
//     }
//     return result
// };

var mergeTwoLists = function (l1, l2) {
    if (l1 === null) {
        return l2;
    }
    if (l2 === null) {
        return l1;
    }
    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));