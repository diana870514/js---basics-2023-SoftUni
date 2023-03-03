function cleverLily(input){
    let age = input[0];
    let priceWashingMashine = Number(input[1]);
    let priceToy = Number(input[2]);

    let sumBirthday = 10;
    let moneyWon = 0;

    for (let i = 1; i <= age ;i++ ){
        if (i % 2 === 0){
            moneyWon += sumBirthday;
            sumBirthday += 10;
            moneyWon -= 1;


        }else{
        moneyWon += priceToy;
        }
    }
    if(moneyWon >= priceWashingMashine){
        leftMoney = moneyWon - priceWashingMashine;
        console.log(`Yes! ${leftMoney.toFixed(2)}`);
    }else{
        needMoney = priceWashingMashine - moneyWon;
        console.log(`No! ${needMoney.toFixed(2)}`);
    }

}
cleverLily(["10","170.00","6"]);
cleverLily(["21","1570.98","3"]);
