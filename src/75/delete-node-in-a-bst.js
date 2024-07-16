/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
    if (!root) return null

    const nodeFn = (node) => {
        if (!node) return null
        if (node.val === key) return node.val = node.right // 执行删除 
        if (node.left < key) return nodeFn(node.right) // 如果小于 val, 则返回右树
        if (node.right < key) return nodeFn(node.left) // 如果小于 val, 则返回左树
    }
    nodeFn(root)

};
const root = [5, 3, 6, 2, 4, null, 7], key = 3
deleteNode(root, key)