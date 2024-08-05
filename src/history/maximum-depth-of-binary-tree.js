// 定义二叉树节点的结构
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

// 辅助函数：将数组转换为二叉树
function arrayToTree(arr) {
    if (arr.length === 0) {
        return null;
    }

    // 创建根节点
    let root = new TreeNode(arr[0]);

    // 创建一个队列来帮助构建树
    let queue = [root];
    let i = 1;

    // 使用广度优先搜索来构建树
    while (i < arr.length) {
        let currentNode = queue.shift();

        if (arr[i] !== null) {
            currentNode.left = new TreeNode(arr[i]);
            queue.push(currentNode.left);
        }
        i++;

        if (i < arr.length && arr[i] !== null) {
            currentNode.right = new TreeNode(arr[i]);
            queue.push(currentNode.right);
        }
        i++;
    }

    return root;
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (root === null) return 0
    let leftDeep = maxDepth(root.left)
    let rightDeep = maxDepth(root.right)
    console.log(`Node ${root.val}: leftDepth = ${leftDeep}, rightDepth = ${rightDeep}`);
    return Math.max(leftDeep, rightDeep) + 1
};

// 示例数组
let arr = [3, 9, 20, null, null, 15, 7];
// 将数组转换为二叉树
let root = arrayToTree(arr);

console.log(maxDepth(root));  // 输出: 3
