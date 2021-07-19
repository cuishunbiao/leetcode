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
 */
var hasPathSum = function(root, targetSum) {
    console.log(root, targetSum);
    if (root == null) return false;
    if (root.left) {
        console.log(root.val)
        if (root.val === targetSum) return true;
        hasPathSum(root.left, targetSum - root.val)
    }
    if (root.right) {
        console.log(root.val)
        if (root.val === targetSum) return true;
        hasPathSum(root.right, targetSum - root.val)
    }
};