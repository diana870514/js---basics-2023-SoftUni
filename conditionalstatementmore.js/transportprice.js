function transportPrice(input) {
    let numbOfKm = Number(input[0]);
    let day = input[1];

    let taxiDay = (numbOfKm * 0.79 + 0.70).toFixed(2);
    let taxiNight = (numbOfKm * 0.90 + 0.70).toFixed(2);
    let bus = (numbOfKm * 0.09).toFixed(2);
    let train = (numbOfKm * 0.06).toFixed(2);





    if (numbOfKm > 0 && numbOfKm < 20) {
        if (day === 'day') {

            console.log(taxiDay);

        } else if (day === 'night') {

            console.log(taxiNight);
        }
    } else if (numbOfKm > 20 && numbOfKm < 100) {
        if (day === 'day' || day === 'night') {

            console.log(bus);
        }
    } else if ( numbOfKm > 100) {
        if (day === 'day' || day === 'night') {
            console.log(train);

        }
    }
}




transportPrice(['5', 'day']);
transportPrice(['7', 'night']);
transportPrice(['25', 'day']);
transportPrice(['180', 'night']);