/**
 * @param {string} senate
 * @return {string}
 */
function predictPartyVictory(senate) {
    let radiant = [];
    let dire = [];
    let n = senate.length;
    // 填充队列
    for (let i = 0; i < n; i++) {
        if (senate[i] === 'R') {
            radiant.push(i);
        } else {
            dire.push(i);
        }
    }
    // 模拟投票过程
    while (radiant.length > 0 && dire.length > 0) {
        let r = radiant.shift();
        let d = dire.shift();
        if (r < d) {
            // Radiant先行使权利，禁止Dire的参议员
            radiant.push(r + n);
        } else {
            // Dire先行使权利，禁止Radiant的参议员
            dire.push(d + n);
        }
    }
    // 确定胜利方
    return radiant.length > 0 ? "Radiant" : "Dire";
}
const senate = "DDRRR"
console.log(predictPartyVictory(senate));