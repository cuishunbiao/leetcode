/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {

    // 创建一个最小堆
    let minHeap = [];

    // 遍历数组
    for (let num of nums) {
        // 如果堆的大小 小于 k，直接添加元素
        if (minHeap.length < k) {
            minHeap.push(num)
            bubbleUp(minHeap, minHeap.length - 1)
        } else if (num > minHeap[0]) {
            // 如果堆已满（大小为k）且当前元素大于堆顶元素
            // 如果当前元素大于堆顶元素，替换堆顶并重新平衡
            minHeap[0] = num;
            bubbleDown(minHeap, 0)
        }
    }

    // 返回堆顶元素，也就是第 k 大的元素
    return minHeap[0]
};

// 向上调整堆
function bubbleUp(heap, index) {
    debugger
    while (index > 0) {
        // 计算父节点的索引
        let parent = Math.floor((index - 1) / 2)
        // 如果当前节点小于父节点，交换它们
        if (heap[parent] > heap[index]) {
            [heap[parent], heap[index]] = [heap[index], heap[parent]]
            index = parent;
        } else {
            // 如果当前节点不小于父节点，停止调整
            break;
        }
    }
}

// 向下调整堆
function bubbleDown(heap, index) {
    let lastIndex = heap.length - 1;

    while (true) {
        // 计算左右子节点的索引
        let leftChild = 2 * index + 1;
        let rightChild = 2 * index + 2;
        let smallest = index;

        // 找出当前节点、左子节点和右子节点中的最小值
        if (leftChild <= lastIndex && heap[leftChild] < heap[smallest]) {
            smallest = leftChild;
        }

        if (rightChild <= lastIndex && heap[rightChild] < heap[smallest]) {
            smallest = rightChild;
        }

        // 如果最小值不是当前节点，交换它们并继续向下调整
        if (smallest !== index) {
            [heap[index], heap[smallest]] = [heap[smallest], heap[index]]
            index = smallest;
        } else {
            // 如果当前节点已经是最小的，停止调整
            break;
        }
    }
}

const nums = [3, 2, 1, 5, 6, 4], k = 2
findKthLargest(nums, k)