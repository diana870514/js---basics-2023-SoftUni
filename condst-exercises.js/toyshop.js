
function toyShop(input){
    let priceHoliday = Number(input[0]);
    let puzzles = Number(input[1]);
    let talkingToys = Number(input[2]);
    let plushBears = Number(input[3]);
    let minioins = Number(input[4]);
    let trucks = Number(input[5]);

    let totalSumToys = puzzles * 2.60 + talkingToys * 3 + plushBears * 4.10 + minioins * 8.20 + trucks * 2;
    let toys = puzzles + talkingToys + minioins + plushBears + trucks;
    let discountPrice = 0;
    if ( toys >= 50){
        totalSumToys = (totalSumToys - totalSumToys * 0.25);
        discountPrice = (totalSumToys * 0.90);
       
      }else{
       totalSumToys = totalSumToys;
       discountPrice = (totalSumToys * 0.90);


      }
      if (discountPrice >= priceHoliday ){
        let leftMoney = (discountPrice - priceHoliday).toFixed(2);
        console.log(`Yes! ${leftMoney} lv left.`);
      }else if(priceHoliday >= discountPrice){
        let moneyNeeded = (priceHoliday - discountPrice).toFixed(2);
        console.log(`Not enough money! ${moneyNeeded} lv needed.`);

      }
        
       
       
      
      
  }

       
      
      
       


  toyShop (["40.8","20","25","30","50","10"]);

  toyShop(["320","8","2","5","5","1"]);



