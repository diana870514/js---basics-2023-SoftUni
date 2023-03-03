

function homePets(input) {
   let days = Number(input[0]);
   let leftFood = Number(input[1]);
   let foodPerDayDog = Number(input[2]);
   let foodPerDayCat = Number(input[3]);
   let foodPerDayTurtle = Number(input[4]);

   let allFoodNeededDog = foodPerDayDog * days;
   let allFoodNeededCat = foodPerDayCat * days;
   let allFoodNeededTurtle = foodPerDayTurtle * days;
   let totalFood = allFoodNeededDog + allFoodNeededCat + allFoodNeededTurtle / 1000;

   if (totalFood < leftFood) {
      kgLeft = Math.floor(leftFood - totalFood);

      console.log(`${kgLeft} kilos of food left.`);

   } else {
      neededKg = Math.ceil(totalFood - leftFood);
      console.log(`${neededKg} more kilos of food are needed.`);
   }





}
homePets(['2', '10', '1', '1', '1200']);
homePets(['5', '10', '2.1', '0.8', '321']);
