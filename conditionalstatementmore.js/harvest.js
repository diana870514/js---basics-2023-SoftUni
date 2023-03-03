



function harvest(input){
    let vineyard = Number(input[0]);
    let grape = Number(input[1]);
    let needLiters = Number(input[2]);
    let numberOfWorkPersons = Number(input[3]);

    let totalGrape = vineyard * grape;
    let vineLitters = (0.40 * totalGrape) / 2.5;

   
    if (vineLitters > needLiters){
        lefttime = Math.ceil(vineLitters - needLiters);
        littersofPersons = Math.ceil(lefttime /  numberOfWorkPersons);
   
        console.log(`Good harvest this year! Total wine: ${vineLitters} liters.`);
        console.log(`${lefttime} liters left -> ${littersofPersons} liters per person.`);
    

    }else if (vineLitters < needLiters){
          leftVine = Math.floor(needLiters - vineLitters);
       
        console.log(`It will be a tough winter! More ${leftVine} liters wine needed.`);
       
      
   

    }

}
harvest(['650','2','175','3']);
harvest(['1020','1.5','425','4']);
