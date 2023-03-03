function matchTicket(input) {
    let budget = Number(input[0]);
    let category = input[1];
    let persons = input[2];
    
    
    if(persons <= 4){
        leftMoney = budget * 0.75;
        total = budget - leftMoney
        
    }else if(persons <= 9){
        leftMoney = budget * 0.60;
        total = budget - leftMoney;
    }else if(persons <= 24){
        leftMoney = budget * 0.50;
        total = budget - leftMoney;

    }else if(persons <= 49){
        leftMoney = budget * 0.40;
        total = budget - leftMoney;
    }else{
        leftMoney = budget * 0.25;
        total = budget - leftMoney;
    }
    if(category == 'Normal'){
        sum = 249.99 * persons;
    }else if(category == 'VIP'){
        sum = 499.99 * persons;
    }
    if(sum < total){
        leftMoneyGroup = Math.abs(sum - total);
        console.log(`Yes! You have ${leftMoneyGroup.toFixed(2)} leva left.`);
    }else{
        needMoney = Math.abs(total - sum);
        console.log(`Not enough money! You need ${needMoney.toFixed(2)} leva.`);
    }



}
matchTicket(['1000', 'Normal', '1']);
matchTicket(['30000','VIP','49']);

