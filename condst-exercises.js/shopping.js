function shoppingTime(input) {
  let budget = Number(input[0]);
  let videoCard = Number(input[1]);
  let processor = Number(input[2]);
  let ram = Number(input[3]);

  let priceVideoCard = videoCard * 250;
  let priceProcessor = priceVideoCard * 0.35;
  let priceProcessorFor1 = priceProcessor * processor;
  let priceRam = priceVideoCard * 0.10;
  let priceRamfor1 = priceRam * ram;
  
  let totalPrice = priceProcessorFor1 + priceRamfor1 + priceVideoCard;
  if(videoCard > processor){
    totalPrice -= totalPrice * 0.15;
  }
  if(totalPrice > budget){
    let needMoney = totalPrice - budget;
    console.log(`Not enough money! You need ${needMoney.toFixed(2)} leva more!`);
  }else{
    let leftSum = budget - totalPrice;
    console.log(`You have ${leftSum.toFixed(2)} leva left!`);
  }





}


shoppingTime(["900", "2", "1", "3"]);
shoppingTime(["920.45", "3", "1", "1"]);