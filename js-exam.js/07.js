function calculator(input){
    let nameFilm = input[0];
    let numSeason = Number(input[1]);
    let numEpisode = Number(input[2]);
    let timeWithoutShow = Number(input[3]);

    let timeShowForOneEpisode = timeWithoutShow * 0.20;
    let timeWidthShow = timeShowForOneEpisode + timeWithoutShow;
    let timeSpecialEpizode = numSeason * 10;
    let totalTime = numSeason * timeWidthShow * numEpisode + timeSpecialEpizode;
    console.log(`Total time needed to watch the ${nameFilm} series is ${Math.floor(totalTime)} minutes.`);



}
calculator(["Lucifer","3","18","55"]);