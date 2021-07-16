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
 * 
 * 定义两个指针，pre和cur, pre在前 cur 在后
 * 每次都让 pre 的next指向 cur ,这样实现一次局部反转
 * 局部完成反转以后，pre 和 cur 都向前移动一步
 * 
 */
var reverseList = function (head) {
    let prev = null;
    let cur = head;
    //如果 head 有值就继续向下走
    while (cur != null ){
        let next = cur.next;
        cur.next = prev
        prev = cur;
        cur = next;
    }
    return prev
};