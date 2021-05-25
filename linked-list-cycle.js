const mylist = {
    head: 1,
    next: {
        val:2,
        next:null
    }
}

var hasCycle = function (head) {
    if (head === null || head.next === null) return false
    let slow, fast;
    slow = fast = head;
    while (slow && fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
        if (slow === fast) {
            return true
        }
    }
    return false
};
hasCycle(mylist)