class Node {
    constructor(data) {
        this.data = data
        this.next = null
        this.prev = null
    }
}
class SingleList {
    constructor() {
        this.size = 0 //单链表长度
        this.head = new Node('head') //链表按节点表示，表头节点
        this.currNode = ''//当前节点指向
    }
    //在单链表中寻找 item 元素
    find(item) {
        let currNode = this.head
        while (currNode && (currNode.data !== item)) {
            currNode = currNode.next
        }
        return currNode
    }
    //向单链表插入元素
    inset(item, element) {
        let itemNode = this.find(item)
        if (!itemNode) return

        let newNode = new Node(element)
        newNode.next = itemNode.next;
        itemNode.next = newNode

        this.size++
    }
    //在单链表移出一个元素
    remove(item) {

    }
    //在单链表尾部添加一个节点
    append(element) {
        let currNode = this.findLast();
        let newNode = new Node(element);

        currNode.next = newNode;
        this.size++;
    }
    //获取单链最后一个节点
    findLast() {
        let currNode = this.head;
        while (currNode.next) {
            currNode = currNode.next
        }
        return currNode
    }
    //判断单链表是否为空
    isEmpty() {

    }
    //显示当前节点
    show() {

    }
    //获取链表长度
    getLength() {
        return this.size
    }
    //从当前节点向前移动 n 个位置
    advance(n, currNode) {

    }
    //单链表的遍历显示
    display() {
        let result = ''
        let currNode = this.head
        while (currNode) {
            result += currNode.data
            currNode = currNode.next
            if (currNode) {
                result += '->'
            }
        }
        return result
    }
    //清空单链表
    clear() {

    }
}

export default SingleList