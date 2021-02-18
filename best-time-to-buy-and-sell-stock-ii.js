/**
 * @param {number[]} prices
 * @return {number}
 * 只要今天比昨天的数值大，就卖出，并持有今天的。
 */

// function maxProfit(params){
//     let current = params[0];
//     let money = 0;
//     params.forEach((item,index)=>{
//         if (params[index] > current ){
//             money += params[index] - current
//         }
//         current = params[index]
//     })
//     return money
// }


function maxProfit(params) {
    let current = params[0];
    let money = 0;
    for(let i=1;i<params.length;i++){
        if (params[index] > current) {
            money += params[index] - current
        }
        current = params[index]
    }
    return money
}


console.log(maxProfit([7, 1, 5, 3, 6, 4]));//5
console.log(maxProfit([7, 6, 4, 3, 1]));//0
