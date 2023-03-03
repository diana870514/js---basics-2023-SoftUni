function travelAgency(input) {
    let town = input[0];
    let packet = input[1];
    let VIP = input[2];
    let numbDays = Number(input[3]);

    let price = 0;
    let hasDiffrent = false;

    if (numbDays > 7) {
        price *= numbDays - 1;
    }
    switch (town) {
        case 'Bansko':
        case 'Borovets':
            if (packet === 'withEquipment') {
                price = numbDays * 100;
                if (VIP === 'yes') {
                    price *= 0.90;
                }
            } else if (packet === 'noEquipment') {
                price = numbDays * 80;
                if (VIP === 'yes') {
                    price *= 0.95;


                }

            } else {
                console.log('Invalid input!');
                return;
            }
            ; break;
        case 'Varna':
        case 'Burgas':

            if (packet === 'withBreakfast') {
                price = numbDays * 130;
                if (VIP === 'yes') {
                    price *= 0.88;
                }

            } else if (packet === 'noBreakfast') {
                price = numbDays * 100;
                if (VIP === 'yes') {
                    price *= 0.93;
                }
            } else {
                console.log('Invalid input!');
                return;

            }
            ; break;

        default :console.log('Invalid input!');
        return;

    }


    if (numbDays < 1) {
        console.log("Days must be positive number!");
    } else {
        console.log(`The price is ${price.toFixed(2)}lv! Have a nice time!`);
    }

}







travelAgency(['Borovets', 'noEquipment', 'yes', '6']);
travelAgency(['Bansko', 'withEquipment', 'no', '2']);
travelAgency(['Varna', 'withBreakfast', 'yes', '5']);
travelAgency(['Burgas', 'noBreakfast', 'no', '4']);
travelAgency(['Varna', 'withBreakfast', 'no', '0']);
travelAgency(['Gabrovo', 'noBreakfast', 'no', '3']);


