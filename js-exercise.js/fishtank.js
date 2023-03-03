/*1. Дължина в см – цяло число в интервала [10 … 500]

2. Широчина в см – цяло число в интервала [10 … 300]

3. Височина в см – цяло число в интервала [10… 200]

4. Процент – реално число в интервала [0.000 … 100.000]*/




function fishTank(input){
    let lengthSm = Number(input[0]);
    let widthSm = Number(input[1]);
    let heightSm = Number(input[2]);
    let percent = Number(input[3]);

    let volume = lengthSm * widthSm * heightSm;
    let volumeLiter = volume / 1000;
    let percentOccupiedSpace = percent / 100;
    let literNeed = volumeLiter * (1 - percentOccupiedSpace );
    console.log(literNeed);



}
fishTank(['85','75','47','17']);
fishTank(['105','77','89','18.5']);