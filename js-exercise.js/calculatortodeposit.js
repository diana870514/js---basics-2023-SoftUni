//сума = депозирана сума + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)
/*1. Депозирана сума – реално число в интервала [100.00 … 10000.00]

2. Срок на депозита (в месеци) – цяло число в интервала [1…12]

3. Годишен лихвен процент – реално число в интервала [0.00 …100.00]*/

function calculatorDeposit(input){
    let depositSum = Number(input[0]) ;
    let depositMonth = Number(input[1]) ;
    let dividentYaerProcent = Number(input[2]);
    let dividentSumProcent = dividentYaerProcent / 100;
    let sum = depositSum + depositMonth * (( depositSum * dividentSumProcent) / 12);
    console.log(sum);

  
    
  

   
}

calculatorDeposit(['200','3','5.7']);
calculatorDeposit(['2350','6','7']);
