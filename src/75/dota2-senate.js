/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
    let senateR = []
    let senateD = []
    for (let sen of senate) {
        if (sen === 'R') {
            senateR.push(sen)
        } else {
            senateD.push(sen)
        }
    }

    if (senateR.length === senateD.length) {
        return senate[0] === 'R' ? 'Radiant' : 'Dire'
    } else if (senateR.length > senateD.length) {
        return 'Radiant'
    } else {
        return 'Dire'
    }
};
const senate = "RDD"
console.log(predictPartyVictory(senate));