import SingleList from './linked/SingleList.js'

const l1List = new SingleList()
for(let item of [1, 2, 4]){
    l1List.append(item)
}

const l2List = new SingleList()
for(let item of [1, 3, 4]){
    l2List.append(item)
}

console.log(l1List.val);

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    debugger
    //如果 l1 或者 l2 为空，则都返回另一个值。
    if( l1 === null ){
        return l2
    }
    if( l2 === null ){
        return l1
    }

    if( l1.val < l2.val ){
        l1.next = mergeTwoLists(l1.next,l2)
        return l1
    }else {
        l2.next = mergeTwoLists(l1, l2.next)
        return l2
    }

};

console.log(mergeTwoLists(l1List,l2List));

// console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));