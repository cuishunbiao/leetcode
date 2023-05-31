var maxProfit = function (params) {
    let current = params[0]
    let money = 0;
    params.forEach((item,index) => {
        if (params[index] > current) {
            money += params[index] - current
        }
        current = params[index]
    });
    return money
};

console.log(maxProfit([7,1,5,3,6,4]));
