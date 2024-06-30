/**
 * @param {number[]} asteroids
 * @return {number[]}
 * 
 * go stack after, if value is megative, then get arr[arr.length]
 * 
 * push and shift.
 * 
 * 
 */
var asteroidCollision = function (asteroids) {
    const stack = []
    for (let i = 0; i < asteroids.length; i++) {
        const current = asteroids[i];
        let isDestroyed = false;
        while (stack.length > 0 && stack[stack.length - 1] > 0 && current < 0) {
            const top = stack[stack.length - 1];
            if (Math.abs(top) < Math.abs(current)) {
                stack.pop();
            } else if (Math.abs(top) === Math.abs(current)) {
                stack.pop();
                isDestroyed = true;
                break;
            } else {
                isDestroyed = true;
                break;
            }
        }
        if (!isDestroyed) {
            stack.push(current)
        }
    }
    return stack
};
const asteroids = [-2, -2, 1, -2]
console.log(asteroidCollision(asteroids));