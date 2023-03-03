function filmPremier(input) {
    let projection = input[0];
    let promotionPacket = input[1];
    let numTicket = Number(input[2]);


   
   

    if (projection === 'John Wick') {
        if (promotionPacket === 'Drink') {
            numTicket *= 12;

        } else if (promotionPacket === 'Popcorn') {
            numTicket *= 15;
        } else {
            numTicket *= 19;
        }

    } else if (projection === 'Star Wars') {
        if (promotionPacket === 'Drink') {
            numTicket *= 18;
        } else if (promotionPacket === 'Popcorn') {
            numTicket *= 25;

        } else {
            numTicket *= 30;
        }
    } else if (projection === 'Jumanji') {
        if (promotionPacket === 'Drink') {
            numTicket *= 9;
        } else if (promotionPacket === 'Popcorn') {
            numTicket *= 11;
        } else {
            numTicket *= 14;
        }

    }
    if (projection === 'Star Wars' || numTicket <= 4) {
        numTicket -= (numTicket * 0.30);

    } 
    if(projection === 'Jumanji' || numTicket === 2){
        numTicket -= (numTicket * 0.15);
    }

    console.log(`Your bill is ${numTicket.toFixed(2)} leva.`);

}
filmPremier(["John Wick", "Drink", "6"]);
filmPremier(["Star Wars","Popcorn","4"]);
filmPremier(["Jumanji","Menu","2"]);