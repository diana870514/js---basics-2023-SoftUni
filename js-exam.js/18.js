function divisionWithoutRemainder(input) {
    let index = 0;
    let n = Number(input[index]);
    index++;
    let even = 0;
    let odd = 0;
    let odd1 = 0;
    let p1 = 2;
    let p2 = 3;
    let p3 = 4;
   
   
  
   
    for(let i = 0; i <= n; i++){
        let num = Number(input[index]);
        index++;
        if(num % p1 === 0){
            even++;
           
        }
         if(num % p2 === 0){
            odd++;
        

        }
        if(num % p3 === 0){
            odd1++;
          

        }
    }
    let total1 = (even * 100) / n;
    let total2 = (odd * 100) / n;
    let total3 = (odd1 * 100) / n;
    
    console.log(`${total1.toFixed(2)}%`);
    console.log(`${total2.toFixed(2)}%`);
    console.log(`${total3.toFixed(2)}%`);



}
divisionWithoutRemainder(["10",
    "680",
    "2",
    "600",
    "200",
    "800",
    "799",
    "199",
    "46",
    "128",
    "65"]);