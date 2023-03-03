/*Ресторант отваря врати и предлага няколко менюта на преференциални цени:

• Пилешко меню – 10.35 лв.

• Меню с риба – 12.40 лв.

• Вегетарианско меню – 8.15 лв.*/

/*От конзолата се четат 3 реда:

· Брой пилешки менюта – цяло число в интервала [0 … 99]

· Брой менюта с риба – цяло число в интервала [0 … 99]

· Брой вегетариански менюта – цяло число в интервала [0 … 99*/
function takewayFood(input){
    let chickenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let veganMenu = Number(input[2]);

    let priceChickenMenu = chickenMenu * 10.35;
    let priceFishMenu = fishMenu * 12.40;
    let priceVeganMenu = veganMenu * 8.15;
    let allCount = priceChickenMenu + priceFishMenu + priceVeganMenu;
    let discountPriceDesert =  allCount * 0.20;
    let totalPrice = allCount + discountPriceDesert + 2.50;
    console.log( totalPrice);


}
takewayFood(['2','4','3']);
takewayFood(['9','2','6'])