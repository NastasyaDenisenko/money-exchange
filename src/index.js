// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let money = {};
    if (currency <= 0) {
        return money;
    } else if (currency > 10000) {
       return money = {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
        while (currency > 0) {
     if (currency >= 50) {
        money.H = (Math.floor(currency / 50));
        currency = currency - money.H * 50;
    } 
     if (currency >= 25) {
        money.Q = (Math.floor(currency / 25));
        currency = currency - money.Q * 25;
    } 
     if (currency >= 10) {
        money.D = (Math.floor(currency / 10));
        currency = currency - money.D * 10;
    } 
     if (currency >= 5) {
        money.N = (Math.floor(currency / 5));
        currency = currency - money.N * 5;
    }  
     if (currency >= 1) {
        money.P = currency; 
        currency = 0;
    }
}
    return money;
}
