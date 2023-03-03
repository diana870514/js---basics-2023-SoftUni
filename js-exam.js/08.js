function movieProfit(input){
    let nameMovie = input[0];
    let numDays = Number(input[1]);
    let numTickets = Number(input[2]);
    let priceTicket = Number(input[3]);
    let percentForCinema = Number(input[4]);

    let priceForOneTicket = numTickets * priceTicket;
    let incomeForAllPeriod = numDays * priceForOneTicket;
    let forCinema = percentForCinema * incomeForAllPeriod / 100;

    let totalIncome = incomeForAllPeriod - forCinema;
    console.log(`The profit from the movie ${nameMovie} is ${totalIncome.toFixed(2)} lv.`);


}
movieProfit(["The Programmer","20","500","7.50","7"]);