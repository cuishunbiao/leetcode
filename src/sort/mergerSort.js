const mergeSort1 = (arr) => {
    if(arr.length <= 1)return arr;
    const middle = Math.floor(arr.length / 2); //取出中间值 - 如果是奇数，怎么处理？
    const left = arr.slice(0, middle) //取出左侧数
    const right = arr.slice(middle) //取出右侧数
    //递归调用mergeSort对左右两半进行排序
    const sortedLeft = mergeSort1(left);
    const sortedRight = mergeSort1(right);
    //合并左右两个已排序的数组
    return merge1(sortedLeft, sortedRight) //一层一层递归，一层为两组
}

//这个 merge1 只比较两个数字
const merge1 = (leftArr, rightArr) => {
    let result = [];
    //比较左右两个数组的元素，并将较小的元素加入结果数组
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] < rightArr[0]) {
            result.push(leftArr.shift())
        } else { 
            result.push(rightArr.shift())
        }
    }
    while (leftArr.length) {
        result.push(leftArr.shift())
    }
    while (rightArr.length) {
        result.push(rightArr.shift())
    }
    return result;
}
console.log(mergeSort1([32, 12, 56, 78, 76, 45, 36]))
