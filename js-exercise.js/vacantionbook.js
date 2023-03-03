/*1. Брой страници в текущата книга – цяло число в интервала [1…1000]

2. Страници, които прочита за 1 час – цяло число в интервала [1…1000]

3. Броят на дните, за които трябва да прочете книгата – цяло число в интервала [1…1000]*/

function bookVacantion(input){
    let pages = Number(input[0]);
    let readPagesForOur = Number(input[1]);
    let quantityDays = Number(input[2]);
    let timeForReading = pages / readPagesForOur;
    let hoursForReading = timeForReading / quantityDays;
    console.log(hoursForReading);
    
   


}
bookVacantion(['212','20','2']);
bookVacantion(['432','15','4']);