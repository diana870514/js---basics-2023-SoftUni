function bikeRace(input) {
    let numbersJuniorBikers = Number(input[0]);
    let numbersSeniorBikers = Number(input[1]);
    let trackType = input[2];

    let allGroup = numbersJuniorBikers + numbersSeniorBikers;


    if (trackType == 'trail') {
        juniors = numbersJuniorBikers * 5.50;
        seniors = numbersSeniorBikers * 7;
        sum = (juniors + seniors) * 0.95;

    } else if (trackType == 'cross-country') {
        juniors = numbersJuniorBikers * 8;
        seniors = numbersSeniorBikers * 9.50;
        sum = (juniors + seniors) * 0.95;


    } else if (trackType == 'downhill') {
        juniors = numbersJuniorBikers * 12.25;
        seniors = numbersSeniorBikers * 13.75;
        sum = (juniors + seniors) * 0.95;

    } else if (trackType == 'road') {
        juniors = numbersJuniorBikers * 20;
        seniors = numbersSeniorBikers * 21.50;
        sum = (juniors + seniors) * 0.95;

    }


    if (trackType == 'cross-country') {
        if (allGroup >= 50) {
            juniors = numbersJuniorBikers * 8;
            seniors = numbersSeniorBikers * 9.50;
            sum = (juniors + seniors) * 0.95;
            sum *= 0.75;

        }
    }


    console.log(`${sum.toFixed(2)}`);

}

bikeRace(['10', '20', 'trail']);
bikeRace(['21', '26', 'cross-country']);
bikeRace(['30', '25', 'cross-country']);
bikeRace(['10', '10', 'downhill']);
bikeRace(['3', '40', 'road']);