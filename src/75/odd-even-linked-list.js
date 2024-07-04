class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    }
}

function oddEvenList(head) {
    if (!head) return head;

    let odd = head; // 第一个是奇数
    let even = head.next; // 第二个是偶数
    let evenHead = even; // 保存偶数节点链表的头部

    while (even !== null && even.next !== null) {
        odd.next = even.next; // 奇数节点的下一个节点是偶数节点的下一个节点
        odd = odd.next; // 移动到下一个奇数节点
        even.next = odd.next; // 偶数节点的下一个节点是新的奇数节点的下一个节点
        even = even.next; // 移动到下一个偶数节点
    }
    odd.next = evenHead
    return head;
}

// Helper function to print the list (for testing)
function printList(head) {
    let current = head;
    while (current !== null) {
        process.stdout.write(current.value + " -> ");
        current = current.next;
    }
    console.log("None");
}

// Example usage:
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

console.log("Original list:");
printList(head);

let result = oddEvenList(head);

console.log("Reordered list:");
printList(result);
