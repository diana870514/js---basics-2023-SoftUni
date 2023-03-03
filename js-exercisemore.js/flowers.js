function flowers(input) {
    let numbHrazintema = Number(input[0]);
    let numbRoses = Number(input[1]);
    let numbTulip = Number(input[2]);
    let season = input[3];
    let day = input[4];
    let price = 0;
    let allFlowers = numbHrazintema + numbRoses + numbTulip;


    if (season === 'Spring' || season === 'Summer') {
        price += numbHrazintema * 2;
        price += numbRoses * 4.10;
        price += numbTulip * 2.50;
    } else if (season === 'Autumn' || season === 'Winter') {
        price += numbHrazintema * 3.75;
        price += numbRoses * 4.50;
        price += numbTulip * 4.15;
    }
    if (day === 'Y') {
        price *= 1.15;
    }
    if (numbTulip > 7 && season === 'Spring') {
        price *= 0.95;


    }
    if (numbRoses >= 10 && season === 'Winter') {
        price *= 0.90;
    }
   
    if (allFlowers > 20) {
        price *= 0.80;

    }
    price += 2;


    console.log(price.toFixed(2))



}

flowers(['2', '4', '8', 'Spring', 'Y']);
flowers(['3', '10', '9', 'Winter', 'N']);
flowers(['10', '10', '10', 'Autumn', 'N']);