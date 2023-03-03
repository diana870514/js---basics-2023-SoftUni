function familyTrip(input){

    let budget = Number(input[0]);
    let nights = Number(input[1]);
    let priceForNight = Number(input[2]);
    let precentFromBudget = Number(input[3]);

    let expense = (budget * precentFromBudget)/100;
    let priceNight = 0;
    let totalSum = 0;

    if(nights > 7){
         price = priceForNight *=0.95;
         priceNight = nights * price;
         totalSum = priceNight + expense
        
    }else{
        priceNight = nights * priceForNight;
        totalSum = priceNight + expense
    }
    if(budget >= totalSum){
        leftSum = budget - totalSum;
        console.log(`Ivanovi will be left with ${leftSum.toFixed(2)} leva after vacation.`)
    }else{
        needSum = totalSum - budget;
        console.log(`${needSum.toFixed(2)} leva needed.`)
        
    }
        
    }
   
familyTrip(["800.50","8","100","2"]);
familyTrip(["500","7","66","15"]);

