function poolDay(input){
    let numbpersons = Number(input[0]);
    let taxaEntrence = Number(input[1]);
    let priceForOnechair = Number(input[2]);
    let priceForUmbrella = Number(input[3]);

    let totalEntrence = numbpersons * taxaEntrence;
    let persosnsForChair = Math.ceil(numbpersons * 0.75);
    let needPriceChair = persosnsForChair * priceForOnechair;
    let personsForUmbrella = Math.ceil(numbpersons * 0.50);
    let needPriceForUmbrella = personsForUmbrella * priceForUmbrella;
    let totalSum = totalEntrence + needPriceChair + needPriceForUmbrella;
    console.log(`${totalSum.toFixed(2)} lv.`);

   


}
poolDay(['21','5.50','4.40','6.20']);
poolDay(["50","6","8","4"]);
poolDay(["100","8","6","4"]);