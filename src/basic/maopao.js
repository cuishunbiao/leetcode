let nums = [1, 4, 9, 3, 6, 2, 8, 7]

//冒泡
for (let j = 0; j < nums.length - 1; j++){
    for (let i = 0; i < nums.length - 1; i++){
        if (nums[i] > nums[i + 1]) {
            var temp = nums[i];
            nums[i] = nums[i + 1]
            nums[i + 1] = temp;
        }
    }
}
console.log(nums);
