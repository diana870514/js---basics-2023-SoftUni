/*1.Рекордът в секунди – реално число в интервала [0.00 … 100000.00]
2.	Разстоянието в метри – реално число в интервала [0.00 … 100000.00]
3.	Времето в секунди, за което плува разстояние от 1 м. - реално число в интервала [0.00 … 1000.00]*/




function wordSwimmingPool(input){
let record = Number(input[0]);
let distance = Number(input[1]);
let timeInSeconds = Number(input[2]);

let secondsForSwimming =  distance * timeInSeconds ;
let laterSeconds = Math.floor(distance / 15)* 12.50;
let totalTime = (secondsForSwimming + laterSeconds).toFixed(2) ;

if(totalTime >= record){
   let leftTime = (totalTime - record).toFixed(2);
   console.log(`No, he failed! He was ${leftTime} seconds slower.`);
   

  
}else{
   console.log(`Yes, he succeeded! The new world record is ${totalTime} seconds.`);
   
   
   
 
 
}
}


wordSwimmingPool(["10464","1500","20"]);
wordSwimmingPool(["55555.67","3017","5.03"]);

