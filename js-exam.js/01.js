function oscars(input){
    let priceRent = Number(input[0]); 

     let priceOscars = priceRent-(priceRent * 0.30);
     let priceFood = priceOscars -(priceOscars * 0.15);
     let priceMusic = priceFood / 2;
    
    let total = priceRent + priceOscars + priceFood + priceMusic;
    console.log(total.toFixed(2));

}
oscars(['3500']);
oscars(['5555']);