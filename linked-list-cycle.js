const mylist = {
    head: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: 2
                }
            }
        },

    }
}

var hasCycle = function (head) {
    if (head === null || head.next === null) return false
    let slow, fast;
    slow = fast = head;
    while (slow && fast) {
        if (slow === fast.next) {
            return true
        }
        slow = slow.next
        fast = fast.next.next
    }
    return false
};
console.log(hasCycle(mylist));