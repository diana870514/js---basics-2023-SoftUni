function carToGo(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let typeClass = '';
    let typeCar = '';
    let price = 0;


    if (budget <= 100) {
        typeClass = "Economy class";
        if (season === 'Summer') {
            typeCar = "Cabrio";
            price = budget * 0.35;
        } else if (season === 'Winter') {
            typeCar = "Jeep";
            price = budget * 0.65;
        }


    } else if (budget > 100 && budget <= 500) {
        typeClass = "Compact class";
        if (season === 'Summer') {
            typeCar = "Cabrio";
            price = budget * 0.45;
        } else if (season === 'Winter') {
            typeCar = "Jeep";
            price = budget * 0.80;
        }
    } else if (budget > 500) {
        typeClass = "Luxury class";
        if (season === 'Summer' || season === 'Winter') {
            typeCar = "Jeep";
            price = budget * 0.90;
        }
    }
    console.log(`${typeClass}`);
    console.log(`${typeCar} - ${price.toFixed(2)}`);





}
carToGo(['450', 'Summer']);
carToGo(['450','Winter']);