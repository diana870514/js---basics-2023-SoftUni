/*Необходимо количество найлон (в кв.м.) - цяло число в интервала [1... 100]

2. Необходимо количество боя (в литри) - цяло число в интервала [1…100]

3. Количество разредител (в литри) - цяло число в интервала [1…30]

4. Часовете, за които майсторите ще свършат работата - цяло число в интервала [1…9]*/
//· Предпазен найлон - 1.50 лв. за кв. метър

//· Боя - 14.50 лв. за литър

//· Разредител за боя - 5.00 лв. за литър

function prepainting(input){
    let naylon = Number(input[0]);
    let quantityLitarColor = Number(input[1]);
    let quantityThinner = Number(input[2]);
    let hoursWork = Number(input[3]);
    let priceNylon = (naylon + 2) * 1.50;
    let priceThinner =  quantityThinner * 5.00;
    let extraColor = quantityLitarColor * 0.10;
    let priceLitarColor =(quantityLitarColor + extraColor) * 14.50;
    let priceBag = 0.40;
    let priceForAll = priceNylon + priceThinner + priceLitarColor + priceBag;
    let priceForTechnicals = ( priceForAll * 0.30) * hoursWork;
    let finalPrice = priceForAll + priceForTechnicals;
    console.log(finalPrice);

}
prepainting(['10','11','4','8']);
prepainting(['5','10','10','1']);
