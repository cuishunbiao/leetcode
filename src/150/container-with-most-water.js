/**
 * @param {number[]} height
 * @return {number}
 * 
 * 双指针，谁小谁前进
 */
var maxArea = function (height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;
    while (left < right) {
        const currentHeight = Math.min(height[left], height[right])
        const currentWidth = right - left;
        const currentArea = currentHeight * currentWidth;
        maxArea = Math.max(currentArea, maxArea)
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxArea;
};
const height = [1, 1]
console.log(maxArea(height));