function pcGAmeShop(input) {
    let index = 0;
    let n = Number(input[index]);
    index++;

    let game1 = 0;
    let game2 = 0;
    let game3 = 0;
    let gameOthers = 0;
   

    for (let i = 0; i < n; i++) {
        let nameGame = input[index];
        index++;
        switch (nameGame) {
            case 'Hearthstone':
                game1++;
                break;
            case 'Fornite':
                game2++;
                break;
            case 'Overwatch':
                game3++;
                break;
            default:
                gameOthers++;
                break;

        }
    }
    let percentHearthstone = game1 / n * 100;
    let percentFornite = game2 / n * 100;
    let percentOverwatch = game3 / n * 100;
    let percentOthers = gameOthers / n * 100;

    console.log(`Hearthstone - ${percentHearthstone.toFixed(2)}%`);
    console.log(`Fornite - ${percentFornite.toFixed(2)}%`);
    console.log(`Overwatch - ${percentOverwatch.toFixed(2)}%`);
    console.log(`Others - ${percentOthers.toFixed(2)}%`);
}






pcGAmeShop(["4", "Hearthstone", "Fornite", "Overwatch", "Counter-Strike"]);
pcGAmeShop(["3", "Hearthstone", "Diablo 2", "Star Craft 2"]);