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
 */

// 先获取总长度
function getLength(head) {
    let current = head;
    let length = 0
    while (current != null) {
        length++;
        current = current.next;
    }
    return length;
}
// 再获取中间位置；
function getMiddle(len) {
    return Math.floor(len / 2)
}
// 找到中间位置，并赋值；
function deleteMiddle(head) {
    if (head === null || head.next === null) return null;
    const len = getLength(head)
    const middle = getMiddle(len)

    let current = head;
    for (let i = 0; i < middle - 1; i++) {
        current = current.next
    }
    current.next = current.next.next;
    return head;
}


function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

// 测试
let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
console.log(head);
head = deleteMiddle(head);
console.log(head)