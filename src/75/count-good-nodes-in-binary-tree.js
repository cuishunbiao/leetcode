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
 * @return {number}
 */
var goodNodes = function (root) {
    let count = 0;
    const getNumber = (node, maxNumber) => {
        if (!node) return
        // 判断当前是否是「好节点」
        if (node.val >= maxNumber) {
            count++
            maxNumber = node.val
        }
        getNumber(node.left, maxNumber)
        getNumber(node.right, maxNumber)
    }
    getNumber(root, root.val)
    return count
};