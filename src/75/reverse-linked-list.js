/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    }
}
// Example usage:
let head1 = new ListNode(1);
head1.next = new ListNode(2);
head1.next.next = new ListNode(3);
head1.next.next.next = new ListNode(4);
head1.next.next.next.next = new ListNode(5);


// Helper function to print the list (for testing)
function printList(head) {
    let current = head;
    while (current !== null) {
        process.stdout.write(current.value + " -> ");
        current = current.next;
    }
    console.log("None");
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    if (head === null) return null
    let curr = head;
    let prev = null;
    while (curr !== null) {
        let next_node = curr.next;// 保存当前节点的下一个节点
        curr.next = prev;// 将当前节点的next指针指向前一个节点，实现反转
        prev = curr;// 将前一个节点指针移动到当前节点位置
        curr = next_node;// 将当前节点指针移动到下一个节点
    }
    return prev
};

reverseList(head1);
