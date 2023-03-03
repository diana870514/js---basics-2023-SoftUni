/*Баскетболни кецове – цената им е 40% по-малка от таксата за една година

• Баскетболен екип – цената му е 20% по-евтина от тази на кецовете

• Баскетболна топка – цената ѝ е 1 / 4 от цената на баскетболния екип

• Баскетболни аксесоари – цената им е 1 / 5 от цената на баскетболната топка*/
//Годишната такса за тренировки по баскетбол – цяло число в интервала [0… 9999]

function basketballTraining(input){
    let yearPaymant = Number(input[0]);
    let priceProcent = yearPaymant * 0.40;
    let basketTraining = yearPaymant - priceProcent;
    let basketEquipmentProcent =  basketTraining * 0.20;
    let basketEquipment = basketTraining - basketEquipmentProcent ;
    let basketBall = 1/4 * basketEquipment ;
    let basketAcssesoaries = 1/5 * basketBall ;
    let totalPrice = yearPaymant + basketTraining + basketEquipment + basketBall + basketAcssesoaries;
    console.log(totalPrice);


}
basketballTraining(['365']);
basketballTraining(['550']);