function movieDestination(input) {
    let budgetFilm = Number(input[0]);
    let destination = input[1];
    let season = input[2];
    let numDays = Number(input[3]);
    let price = 0;



    if (destination === 'Sofia') {
        if (season === 'Winter') {
            price = numDays * 17000;
        } else {
            price = numDays * 12500;
        }

    } else if (destination === 'Dubai') {
        if (season === 'Winter') {
            price = numDays * 45000;

        } else {
            price = numDays * 40000;
        }
    } else if (destination === 'London') {
        if (season === 'Winter') {
            price = numDays * 24000;
        } else {
            price = numDays * 20250;
        }
    }
    if (destination === 'Dubai') {
        price -= price * 0.30;
    }
    if (destination === 'Sofia') {
        price += price * 0.25;
    }
    if(budgetFilm > price){
        let leftMoney = budgetFilm - price;
        console.log(`The budget for the movie is enough! We have ${leftMoney.toFixed(2)} leva left!`);
    }else{
        let needMoney = price - budgetFilm;
        console.log(`The director needs ${needMoney.toFixed(2)} leva more!`);
    }
}
movieDestination(["400000", "Sofia", "Winter", "20"]);
movieDestination(["1000000","Dubai","Summer","5"]);