function tenisRanklist(input) {
    let tournamentsWon = Number(input[0]);
    let firstPoints = Number(input[1]);
   





   
    
   
    let winners = 0;
    let points = 0;





    for (let i = 2; i <= tournamentsWon + 1; i++) {
        let tournamentStage = input[i];


        if (tournamentStage == 'W') {
            points += 2000;
            winners++


        } else if (tournamentStage == 'F') {
            points += 1200;

        } else {
            points += 720;

        }



    }
    let allPoints = firstPoints + points;
    console.log(`Final points: ${allPoints}`);
    let middleWinners = points /tournamentsWon;
   
    console.log(`Average points: ${Math.floor(middleWinners)}`);
    let percentWin = winners /tournamentsWon * 100;
    console.log(`${percentWin.toFixed(2)}%`);




   
    


}



tenisRanklist(["4", "750", "SF", "W", "SF", "W"]);
tenisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]);
tenisRanklist(["7", "1200", "SF", "F", "W", "F", "W", "SF", "W"]);



