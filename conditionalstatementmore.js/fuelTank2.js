function fuelTank2(input) {
    let typeGaz = input[0];
    let numGaz = Number(input[1]);
    let cardDiscount = input[2];

   

    let discount = 0;
    let liters = 0;
    let discount1 = 0;

    if (typeGaz === 'Gas') {

        if (cardDiscount === 'Yes') {
            discount = 0.93 - 0.08;
            liters = numGaz * discount;
        } else if(cardDiscount === 'No'){
            liters += numGaz * 0.93;

        }
    } else if (typeGaz === 'Gasoline') {
        if (cardDiscount === 'Yes') {
            discount = 2.22 - 0.18;
            liters = numGaz * discount;
        } else if(cardDiscount === 'No'){
            liters += numGaz * 2.22;
        }
    }else if(typeGaz === 'Diesel'){
        if(cardDiscount === 'Yes'){
        discount = 2.33 - 0.12;
        liters = numGaz * discount;
        }else if(cardDiscount === 'No'){
            liters += numGaz * 2.33;
        }
    }



    if (numGaz > 20 && numGaz <= 25) {
        discount1 = liters -(liters * 0.08);
    } else if (numGaz > 25) {
        discount1 = liters -(liters * 0.10);
    }else{
        discount1 = liters;
    }
    console.log(`${discount1.toFixed(2)} lv.`);


}

fuelTank2(['Gas', '30', 'Yes']);
fuelTank2(['Gasoline', '25', 'No']);
fuelTank2(['Diesel', '19', 'No']);
