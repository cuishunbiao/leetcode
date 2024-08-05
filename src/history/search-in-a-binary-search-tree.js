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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
    if (!root) return null
    const nodeFn = (node) => {
        if (!node) return null
        // 找到目标节点
        if (node.val === val) {
            return node
        }
        if (node.val > val) return nodeFn(node.left) // 递归搜索左子树
        if (node.val < val) return nodeFn(node.right) // 递归搜索右子树
    }
    return nodeFn(root)
};
