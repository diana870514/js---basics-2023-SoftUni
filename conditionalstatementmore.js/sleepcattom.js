/*•	Когато е на работа, стопанинът му си играе с него по 63 минути на ден.
•	Когато почива, стопанинът му си играе с него  по 127 минути на ден.
30 000  минути в година
годината има 365 дни */



function sleepCatTom(input){
    let numbOfDayOff = Number(input[0]);
    
    let workDays = 365 - numbOfDayOff;
    let breakDays = numbOfDayOff * 127;
    let taimeToPlay = workDays * 63;
    let totalTime = breakDays + taimeToPlay;

    if(30000 > totalTime){
        leftTime = Math.abs(30000 - totalTime);
    
         inHours = Math.floor(leftTime / 60);
         inMinutes = (leftTime % 60);
        
         
         console.log("Tom sleeps well");
         console.log(`${inHours} hours and ${inMinutes} minutes less for play`);
       
    }else if (30000 < totalTime){
         leftTime = Math.abs(totalTime - 30000);
         inHours = Math.floor(leftTime / 60);
         inMinutes = (leftTime % 60);
       
        console.log("Tom will run away");
        console.log(`${inHours} hours and ${inMinutes} minutes more for play`);
}

    


   


}
sleepCatTom(['20']);
sleepCatTom(['113']);
