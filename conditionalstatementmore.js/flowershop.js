
function flowerShop(input){
    let magnolia = Number(input[0]);
    let hyacinth = Number(input[1]);
    let roses = Number(input[2]);
    let cactus = Number(input[3]);
    let priceForPresent = Number(input[4]);
   
    let priceMagnolia = magnolia * 3.25;
    let priceHaycinth = hyacinth * 4;
    let priceRoses = roses * 3.50;
    let priceCactus = cactus * 8;
    let totalPriceFlowr = priceMagnolia + priceHaycinth + priceRoses + priceCactus;
    let totalPriceTax = (totalPriceFlowr * 0.5) / 10;
   
    let total = (totalPriceFlowr - totalPriceTax);

   
    if (total < priceForPresent){
        
        neededMoney = Math.ceil(priceForPresent - total) ;
        console.log(`She will have to borrow ${neededMoney} leva.`)
    }else{
       
       leftMoney = Math.floor(total - priceForPresent);
        console.log(`She is left with ${leftMoney} leva.`);
    }

}
flowerShop(['2','3','5','1','50']);
flowerShop(['15','7','5','10','100']);

