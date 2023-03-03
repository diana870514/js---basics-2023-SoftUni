function fuelTank(input) {
  let gaz = input[0];
  let litter = Number(input[1]);

  if (gaz !== "Diesel" && gaz !== "Gas" && gaz !== "Gasoline"){
    console.log("Invalid fuel!");
  }else{
    if(litter >= 25){
      console.log(`You have enough ${gaz.toLowerCase()}.`);

  } else {
    console.log(`Fill your tank with ${gaz.toLowerCase()}!`)
  }
    
    
  }

  }




fuelTank(['Diesel','10']);
fuelTank(['Gasoline','40']);
fuelTank(['Gas','25']);
fuelTank(['Kerosene','200']);
