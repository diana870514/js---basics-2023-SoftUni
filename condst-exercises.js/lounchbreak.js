
function lunchBreak(input) {
    let nameFilm = input[0];
    let timeOfEpizod = Number(input[1]);
    let timeToBreak = Number(input[2]);

    let timeForLunch = timeToBreak * 0.125;
    let timeforRelaction = timeToBreak * 0.25;
    let leftTime = timeToBreak - timeForLunch - timeforRelaction;

    if (leftTime >= timeOfEpizod) {
        let freeTime = Math.abs(timeOfEpizod - leftTime);
        console.log(`You have enough time to watch ${nameFilm} and left with ${Math.ceil(freeTime)} minutes free time.`);
    } else {
        let noTime = Math.abs(timeOfEpizod - leftTime);
        console.log(`You don't have enough time to watch ${nameFilm}, you need ${Math.ceil(noTime)} more minutes.`);
    }
}







lunchBreak(["Game of Thrones", "60", "96"]);
lunchBreak(["Teen Wolf", "48", "60"]);
