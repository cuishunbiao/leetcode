/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 * 
 * 一般做法是先对 链表 添加一个 哑节点，这个哑节点指向 head；
 * 这样就不用对 head 做判断了
 * 1.先拿到链表长度；
 * 2.算出第几个节点需要改变 next 指向（如果存在 next 的话）；
 * 未完成
 */
// var removeNthFromEnd = function(head, n) {
//     let cur = head, len = 0;
//     while (cur !== null) {
//         len++
//         cur = cur.next
//     }
//     let len2 = len - n + 1;
//     for (let step = 0; step < len2; step++ ){
//         cur = cur.next;
//     }
//     cur.next = cur.next.next;
//     return cur;
// };


var removeNthFromEnd = function(head, n) {
    let fast = head, slow = head;
    for (let i=0; i<n; i++) {
        fast = fast.next;
    }
    if (!fast) return head.next;
    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return head;
}


