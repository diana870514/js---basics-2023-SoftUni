/*1.x – височината на къщата – реално число в интервала [2...100]
2.	y – дължината на страничната стена – реално число в интервала [2...100]
3.	h – височината на триъгълната стена на прокрива – реално число в интервала [2...100]*/



function housePainting(input){
    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);

    let laterallSide = x * y ;
    let window = 1.5 * 1.5;
    let bothSides = 2 * laterallSide - 2 * window ;
    let behindSide = x * x ;
    let indoor = 1.2 * 2;
    let togetherSides = 2 * behindSide - indoor;
    let area =  bothSides + togetherSides;
    let greenColor = (area / 3.4).toFixed(2);
    console.log(greenColor);

    let bothRectangle = 2 * (x * y );
    let bithTriangle = 2 * (x * h / 2);
    let allArea = bothRectangle +  bithTriangle;
    let redColor = (allArea / 4.3).toFixed(2);
    console.log(redColor);



}
housePainting(['6','10','5.2']);
housePainting(['10.25','15.45','8.88']);