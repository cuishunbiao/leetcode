class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    }
}
// Helper function to print the list (for testing)
function printList(head) {
    let current = head;
    while (current !== null) {
        console.log(current.value + " -> ")
        current = current.next;
    }
}

// Example usage:
let list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(4);

let list2 = new ListNode(1)
list2.next = new ListNode(3);
list2.next.next = new ListNode(4);

console.log(printList(list1))
console.log(printList(list2))

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let dummy = new ListNode()
    let current = dummy;
    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next
        } else {
            current.next = list2
            list2 = list2.next
        }
        current = current.next
    }

    if (list1 !== null) {
        current.next = list1
    } else {
        current.next = list2
    }
    return dummy.next
};

mergeTwoLists(list1, list2)
console.log(printList(dummy))
