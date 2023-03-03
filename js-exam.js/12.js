function cinema(input) {
    let index = 0;
    let capacitetPlaces = Number(input[index]);
    index++;
    command = input[index];
    index++;

    let placesInHall = 0;
    let poepleCounter = 0;
    let incomeMoney = 0;

    while (command !== 'Movie time!') {
        let persons = Number(command);
        command = input[index];
        index++;

        placesInHall = capacitetPlaces - persons;
        poepleCounter++;
       







    }

}
cinema(["50", "15", "10", "10", "15", "5"]);