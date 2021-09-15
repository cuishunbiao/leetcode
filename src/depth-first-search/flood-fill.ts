// BFS

const floodFull = (image, sr, sc, newColor) => {
    const m = image.length;
    const n = image[0].length;
    const oldColor = image[sr][sc];

    if (oldColor === newColor) return image;

    //新建一个队列
    const queue = [[sr, sc]];

    while (queue.length) {
        const [i, j] = queue.shift(); // 取第一个，并从数组中删除；
        image[i][j] = newColor;

        if (i - 1 >= 0 && image[i - 1][j] === oldColor) queue.push([i - 1, j]);
        if (i + 1 < m && image[i + 1][j] === oldColor) queue.push([i + 1, j]);
        if (j - 1 >= 0 && image[i][j - 1] === oldColor) queue.push([i, j - 1]);
        if (j + 1 < n && image[i][j + 1] === oldColor) queue.push([i, j + 1])
    }
    return image;
}

