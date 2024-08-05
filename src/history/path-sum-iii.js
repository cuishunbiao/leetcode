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
 * @return {number}
 */
var pathSum = function (root, targetSum) {
    if (root === null) return 0

    // 从当前节点计算路径数
    let totalPaths = pathFromNode(root, 0, targetSum)

    // 递归计算左子树和右子树的路径数
    totalPaths += pathSum(root.left, targetSum)
    totalPaths += pathSum(root.right, targetSum)

    return totalPaths
};


const pathFromNode = (node, currentSum, targetSum) => {
    if (node === null) return 0;
    // 更新当前路径和
    currentSum += node.val;

    // 检查当前路径和是否等于目标和
    let totalPaths = 0;
    if (currentSum === targetSum) {
        totalPaths += 1
    }

    // 递归计算左子树和右子树的路径和
    totalPaths += pathFromNode(node.left, currentSum, targetSum);
    totalPaths += pathFromNode(node.right, currentSum, targetSum)

    return totalPaths
}