/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * 1.先拿到链表的长度
 * 2.然后获取到链表的2/1的长度；
 * 3.返回
 */
// var middleNode = function(head) {
//     let len = 0, cur = head;
//     while (cur != null ){
//         len++;
//         cur = cur.next
//     }
//     /**
//      * 获取中间的位置
//      * 数组长度为偶数的时候，为什么中间的位置要 trunc（去掉小数点） 呢？
//      * 为什么不是 ceil 向上取整呢？
//      * 因为下一个循环是为了改变 next 的指向，只需要改变之前的指向数量位置即可。
//      */
//     let middleLen = Math.trunc(len / 2);
//     let len2 = 0;
//     cur = head;
//     // 如果当前长度小于 middleLen ，则换 next 的指针；
//     while (len2 < middleLen) {
//         ++len2;
//         cur = cur.next;
//     }
//     return cur
// };


/**
 * 快慢指针法
 * 快指针 跑两步；
 * 慢指针 跑一步；
 */
var middleNode = function (head) {
    let fast = head, slow = head;
    // 只需要判断一个 next 节点，保证 next 节点存在即可
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}