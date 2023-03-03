//• Пакет химикали - 5.80 лв.

//• Пакет маркери - 7.20 лв.

//• Препарат - 1.20 лв (за литър)
/*· Брой пакети химикали - цяло число в интервала [0...100]

· Брой пакети маркери - цяло число в интервала [0...100]

· Литри препарат за почистване на дъска - цяло число в интервала [0…50]

· Процент намаление - цяло число в интервала [0...100]*/

function priceDiscount(input){
    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let boardCleaning = Number(input[2]);
    let discount = Number(input[3]);
    let pricePens = pens * 5.80;
    let priceMarkers = markers * 7.20;
    let priceBoard =  boardCleaning * 1.20;
    let count = pricePens + priceMarkers + priceBoard;
    let priceDiscount = discount / 100;
    let finalPrice = count - (count * priceDiscount);
    console.log(finalPrice);





}
priceDiscount(['2','3','4','25']);
priceDiscount(["4","2","5","13"]);