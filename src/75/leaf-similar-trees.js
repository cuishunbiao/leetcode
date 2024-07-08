/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */

function getLeafSequence(root) {
    let leaves = [];
    function dfs(node) {
        if (node === null) return;
        if (node.left === null && node.right === null) {
            leaves.push(node.val);
        }
        dfs(node.left);
        dfs(node.right);
    }
    dfs(root)
    return leaves;
}

var leafSimilar = function (root1, root2) {
    let leaves1 = getLeafSequence(root1);
    let leaves2 = getLeafSequence(root2);
    return JSON.stringify(leaves1) === JSON.stringify(leaves2)
};