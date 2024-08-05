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
 * @param {number} targetSum
 * @return {boolean}
 * 
 * How to determine last node in the tree?
 * 
 */
var hasPathSum = function (root, targetSum) {
    if (!root) return false;
    // 每次传入计算结果值
    const computeResult = (node, remainingSum) => {
        if (!node) return false;
        if (!node.left && !node.right && node.val === remainingSum) {
            return true;
        }
        const leftResult = computeResult(node.left, remainingSum - node.val)
        const rightResult = computeResult(node.right, remainingSum - node.val)

        return leftResult || rightResult
    }
    return computeResult(root, targetSum)
};