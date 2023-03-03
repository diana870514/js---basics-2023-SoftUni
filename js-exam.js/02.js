function godzilaKingKong(input) {
    let budgetFilm = Number(input[0]);
    let numStatist = Number(input[1]);
    let priceClothes = Number(input[2]);
    

   let decorFilm = budgetFilm * 0.10;
   let sumClothes = numStatist * priceClothes;
  
  
   
   if(numStatist > 150){
     sumClothes -=(sumClothes * 0.10);
    }
    let totalSum = decorFilm + sumClothes;
    if(totalSum > budgetFilm){
        let needMoney = totalSum - budgetFilm;
        console.log("Not enough money!");
        console.log(`Wingard needs ${needMoney.toFixed(2)} leva more.`);

    }else{
        let leftMoney = budgetFilm - totalSum;
        console.log("Action!");
        console.log(`Wingard starts filming with ${leftMoney.toFixed(2)} leva left.`);
    }
   
   

   
}
godzilaKingKong(['9587.88', '222', '55.68']);