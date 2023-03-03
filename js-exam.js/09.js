function movieDay(input){

    let timeForPicture = Number(input[0]);
    let numScene = Number(input[1]);
    let timeForScene = Number(input[2]);
     
    let training = timeForPicture * 0.15;
    let timePictureScene = timeForScene * numScene;
    let totalNeedTime = training + timePictureScene;
    if(totalNeedTime < timeForPicture){
        let minutesLeft = timeForPicture - totalNeedTime;
        console.log(` You managed to finish the movie on time! You have ${Math.round(minutesLeft)} minutes left!`);
    }else{
        let needMinutes = totalNeedTime - timeForPicture;
        console.log(`Time is up! To complete the movie you need ${Math.round(needMinutes)} minutes.`);
    }

}
movieDay(["120","10","11"]);