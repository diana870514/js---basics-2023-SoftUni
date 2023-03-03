function treckingMania(input) {
   let n = Number(input[0]);
  
   let musala = 0;
   let monblan = 0;
   let kilimindgaro = 0;
   let k2 = 0;
   let everest = 0;

 


  
  
   for (let i = 1; i <= n; i++) {
      let num = Number(input[i]);

      if(num <= 5){
         musala += num;
      }else if(num >= 6 && num <=12){
         monblan += num;
      }else if(num >=13 && num <= 25){
         kilimindgaro += num;

      }else if(num >= 26 && num <= 40){
         k2 += num;

      }else{
        everest += num;

      }
      
   }
   num = musala + monblan + kilimindgaro + k2 + everest;
   let percentMusala = musala / num * 100;
   let percentMonblan = monblan / num * 100;
   let percentKilimindgaro = kilimindgaro / num * 100;
   let percentK2 = k2 / num * 100;
   let percentEverest = everest / num * 100;

   console.log(`${percentMusala.toFixed(2)}%`);
   console.log(`${percentMonblan.toFixed(2)}%`);
   console.log(`${percentKilimindgaro.toFixed(2)}%`);
   console.log(`${percentK2.toFixed(2)}%`);
   console.log(`${percentEverest.toFixed(2)}%`);
  
  
  
  
  
  
   
}

treckingMania(["5", "25", "41", "31", "250", "6"]);
treckingMania(["10","10","5","1","100","12","26", "17", "37", "40", "78"]);


