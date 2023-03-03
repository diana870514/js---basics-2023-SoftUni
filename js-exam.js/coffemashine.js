function coffeeMashine(input){
    let drink = input[0];
    let sugar = input[1];
    let quantityDrinks = Number(input[2]);

    let totalSum = 0;
switch(drink){
    case 'Espresso':
        if(sugar === 'Without'){
            sum = quantityDrinks * 0.90;
            totalSum = sum - sum * 0.35;
           
        }else if(sugar === 'Normal'){
            totalSum = quantityDrinks * 1;

        }else{
            totalSum = quantityDrinks * 1.20;
        }
        ;break;
    case 'Cappuccino':
        if(sugar === 'Without'){
            sum = quantityDrinks * 1;
           totalSum = sum - sum * 0.35;
            
        }else if(sugar === 'Normal'){
            totalSum = quantityDrinks * 1.20;
        }else{
            totalSum = quantityDrinks * 1.60;
        }
        ;break;
            
    case 'Tea':
        if(sugar == 'Without'){
            sum = quantityDrinks * 0.50;
            totalSum = sum - sum * 0.35;

        }else if(sugar === 'Normal'){
            sum = quantityDrinks * 0.60;
            totalSum = sum - sum * 0.80;

        }else{
            totalSum = quantityDrinks * 0.70;
        }
        ;break;

}
if(drink === 'Espresso'){
    if(quantityDrinks >= 5){
        totalSum *= 0.75;
    }
}
if(totalSum > 15){
    totalSum *= 0.80;
}
console.log(`You bought ${quantityDrinks} cups of ${drink} for ${totalSum.toFixed(2)} lv.`);

}
coffeeMashine(["Espresso","Without","10"]);
coffeeMashine(["Cappuccino","Normal","13"]);
coffeeMashine(["Tea","Extra","3"]);
