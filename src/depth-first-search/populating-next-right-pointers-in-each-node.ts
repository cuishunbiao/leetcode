/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
// var connect = function(root) {
//     if (root === null) return root;
//     // 新建一个队列
//     const Q = [root]; // 将第一层节点加入队列
//     while (Q.length > 0) {
//         const size = Q.length;
//         for (let i=0; i < size; i++) {
//             //从队首取出元素
//             const node = Q.shift();
//             if (i < size - 1) {
//                 node.next = Q[0];
//             }
//             if (node.left !== null) {
//                 Q.push(node.left)
//             }
//             if (node.right !== null) {
//                 Q.push(node.right)
//             }
//         }
//     }
//     return root
// };

var connect = function(root) {
    if (root === null) return root;
    let leftmost = root;
    while (leftmost.left !== null) {
        let head = leftmost;
        while ( head !== null ) {
            head.left.next = head.right;
            if (head.next != null) {
                head.right.next = head.next.left;
            }
            head = head.next;
        }
        leftmost = leftmost.left;
    }
    return root
};