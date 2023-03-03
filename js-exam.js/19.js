function vetParking(input) {
    let index = 0;
    let day = Number(input[index]);
    index++;
    let hours = Number(input[index]);
    index++;




    let total = 0;
    let parkingPrice = 0;
   









    for (let i = 0; i <= day; i++) {
      
        if (day % 2 === 0) {
            parkingPrice += 2.50;
           
        }
        if (day % 2 !== 0) {
            parkingPrice += 1.25;
           



        } else {
            parkingPrice += 1;
            



        }
        for (let x = 0; x <= hours; x++) {
            if (hours % 2 === 0) {
                parkingPrice += 2.50;
                
            }
            if (hours % 2 !== 0) {
                parkingPrice+= 1.25;
               



            } else {
                parkingPrice += 1;
               



            }
        }
        total += parkingPrice;
    }

    console.log(`Day: ${day} - ${parkingPrice} leva`);
    console.log(`Day: ${day} - ${parkingPrice} leva`);
    console.log(`Total: ${total} leva`);
}





vetParking(["2", "5"]);