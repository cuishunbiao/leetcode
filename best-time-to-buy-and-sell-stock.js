/**
 * @param {number[]} prices
 * @return {number}
 * 
    示例 1:

    输入: [7,1,5,3,6,4]
    输出: 5
    解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
        注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
    示例 2:

    输入: [7,6,4,3,1]
    输出: 0
    解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
    [1,2,3,4]

 */
var maxProfit = function(prices) {
    let startNumber = prices[0];
    let endNumber = 0;
    let result = [];
    for( i = 1; i < prices.length; i++ ){
        if( startNumber > prices[i] && i != prices.length-1 ){
            startNumber = prices[i]
            continue;
        }
        if( prices[i] > startNumber ){
            endNumber = prices[i]
            result.push(endNumber - startNumber)
        }
    }
    let _arr = Math.max(...result,0);
    return _arr
};
console.log(maxProfit([3,3,5,0,0,3,1,4]))//4
console.log(maxProfit([2,1,2,1,0,1,2]));//2
console.log(maxProfit([2,1,2,0,1]));//1
console.log(maxProfit([7,6,4,3,1]));//0
console.log(maxProfit([2,4,1]));//2

