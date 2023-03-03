function cinemaWeek(input) {
    let nameFilm = input[0];
    let nameHall = input[1];
    let numTicket = Number(input[2]);
    let price = 0;

    if (nameFilm === 'A Star Is Born') {
        if (nameHall === 'normal') {
            price = numTicket * 7.50;
        } else if (nameHall === 'luxury') {
            price = numTicket * 10.50;
        } else {
            price = numTicket * 13.50;
        }
    } else if (nameFilm === 'Bohemian Rhapsody') {
        if (nameHall === 'normal') {
            price = numTicket * 7.35;
        } else if (nameHall === 'luxury') {
            price = numTicket * 9.45;
        } else {
            price = numTicket * 12.75;
        }
    } else if (nameFilm === 'Green Book') {
        if (nameHall === 'normal') {
            price = numTicket * 8.15;
        } else if (nameHall === 'luxury') {
            price = numTicket * 10.25;
        } else {
            price = numTicket * 13.25;

        }

    } else if (nameFilm === 'The Favourite') {
        if (nameHall === 'normal') {
            price = numTicket * 8.75;
        } else if (nameHall === 'luxury') {
            price = numTicket * 11.55;
        } else {
            price = numTicket * 13.95;
        }
    }
    console.log(`${nameFilm} -> ${price.toFixed(2)} lv.`);
}
cinemaWeek(["A Star Is Born", "luxury", "42"]);
cinemaWeek(["Green Book","normal","63"]);