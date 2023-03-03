function vacantion(input) {
    let index = 0;
    let moneyVacantion = Number(input[index]);
    index++;
    let haveMoney = Number(input[index]);
    index++;



    let daySpend = 0;
    let totalDays = 0;
    
    while (haveMoney < moneyVacantion) {
        let saveOrSpend = input[index];
        index++;
        let money = Number(input[index]);
        index++;


        if (saveOrSpend === 'save') {
            haveMoney += money;
            daySpend = 0;
        } else if (saveOrSpend === 'spend') {
            if(money > haveMoney){
                haveMoney = 0;
            }else{
                haveMoney -= money;
            }
           daySpend++;
        
        }
        totalDays++;
       
        if(daySpend === 5){
            console.log("You can't save the money.");
            console.log(totalDays);
            break;
        }
       
    }
    if(haveMoney >= moneyVacantion){
        console.log(`You saved the money for ${totalDays} days.`);
    }

}







vacantion(["250", "150", "spend", "50", "spend", "50", "save", "100", "save", "100"]);
vacantion(["2000", "1000", "spend", "1200", "save", "2000"]);
vacantion(["110", "60", "spend", "10", "spend", "10", "spend", "10", "spend", "10", "spend", "10"]);





