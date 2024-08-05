// 1 = 1;
// 2 = 2;
// 3 = 3
// 4 = 5;
// 5 = 8;
// 6 = 13;


function climbStairs(n) {
    if (n <= 2) return n;
    let prev = 1, curr = 2;
    for (let i = 3; i <= n; i++) {
        let next = prev + curr;
        prev = curr;
        curr = next;
    }
    return curr
}

const n = 6;
console.log(climbStairs(n))