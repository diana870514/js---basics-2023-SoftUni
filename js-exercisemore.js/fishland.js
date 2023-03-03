/*•	Паламуд – 60% по-скъп от скумрията
•	Сафрид – 80% по-скъп от цацата
•	Миди – 7.50 лв. за килограм*/
/*•	Първи ред – цена на скумрията на килограм. Реално число в интервала [0.00…40.00]
•	Втори ред – цена на цацата на килограм. Реално число в интервала [0.00…30.00]
•	Трети ред – килограма паламуд. Реално число в интервала [0.00…50.00]
•	Четвърти ред – килограма сафрид. Реално число в интервала [0.00… 70.00]
•	Пети ред – килограма миди. Цяло число в интервала [0 ... 100]*/
function fishland(input){
    let priceMackerel = Number(input[0]);
    let priceSprat = Number(input[1]);
    let priceBonito = Number(input[2]);
    let priceSafrid = Number(input[3]);
    let priceMussels = Number(input[4]);
    let Bonito = 0.60 * priceMackerel + priceMackerel ;
    let sumBonito = priceBonito * Bonito;
    let safrid = 0.80 * priceSprat + priceSprat;
    let sumSafrid =  priceSafrid * safrid;
    let mussels = 7.50 * priceMussels;
    let total = (sumBonito + sumSafrid + mussels).toFixed(2);
    console.log(total);


}
fishland(['6.90','4.20','1.5','2.5','1']);
fishland(['5.55','3.57','4.3','3.6','7']);
