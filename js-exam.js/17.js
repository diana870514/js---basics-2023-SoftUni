function footbolTournament(input) {
    let index = 0;
    let nameTeam = input[index];
    index++;
    let numPlayForSeason = Number(input[index]);
    index++;


    let gamesWin = 0;
    let gameEquality = 0;
    let gamesLost = 0;
    let winCount = 0;
    let equality = 0;
    let lost = 0;
    for (let i = 2; i <= numPlayForSeason + 1; i++) {
        let playMeet = input[index];
        index++;

        if (playMeet === 'W') {
            winCount++;
            gamesWin += 3;

        } else if (playMeet === 'D') {
            equality++;
            gameEquality += 1

        } else if (playMeet === 'L') {
            lost++;
            gamesLost += 0;
        }


    }
    let totalPoints = gamesWin + gameEquality;
    let winRate = (winCount / numPlayForSeason) * 100;

    if (numPlayForSeason <= 0) {
        console.log(`${nameTeam} hasn't played any games during this season.`);
    }

    if (gamesWin > 1) {
        console.log(`${nameTeam} has won ${totalPoints} points during this season.`);
        console.log("Total stats:");
        console.log(`## W: ${winCount}`);
        console.log(`## D: ${equality}`);
        console.log(`## L: ${lost}`);
        console.log(`Win rate: ${winRate.toFixed(2)}%`);
    }

}





footbolTournament(["Chelsea", "0"]);
footbolTournament(["Barcelona",
    "7",
    "W",
    "D",
    "L",
    "L",
    "W",
    "W",
    "D"])