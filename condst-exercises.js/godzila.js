




function godzilaToKingKong(input){
    let sumFilm = Number(input[0]);
    let extras = Number(input[1]);
    let clothesExtras = Number(input[2]);
    if (extras > 150 ){
        clothesExtras -= clothesExtras * 0.10;
    }
    let decorFilm = 0.10 * sumFilm;
    let totalSumExtras = extras * clothesExtras;
    
     let totalBudget = totalSumExtras + decorFilm  ;

         
    if (totalBudget > sumFilm){
        let needsMoney = (totalBudget-sumFilm).toFixed(2);
        console.log("Not enough money!");
        console.log(` Wingard needs ${needsMoney} leva more.`);
    }else if (totalBudget <= sumFilm){
    let leftMoney = (sumFilm - totalBudget).toFixed(2);
        console.log("Action!");
        console.log(`Wingard starts filming with ${leftMoney} leva left.`);
    }
}


    



godzilaToKingKong(["20000","120","55.5"]);
godzilaToKingKong(["15437.62","186","57.99"]);
