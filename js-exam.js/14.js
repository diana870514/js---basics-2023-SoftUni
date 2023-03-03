function club(input) {
    let index = 0;
    let expectIncomeSum = Number(input[index]);
    index++;
    let command = input[index];
    index++;

    let income = 0;
    



    while (command !== 'Party!') {

        let nameCoctail = command;
        let numCoctail = Number(input[index]);
        index++;



        let name = nameCoctail.length;

        let totalPrice = name *= numCoctail;
        if (totalPrice % 2 !== 0) {
            totalPrice *=  0.75;
        }
        income += totalPrice;
        
        if (income >= expectIncomeSum) {
            console.log("Target acquired.");
            break;
        }
        command = input[index];
        index++;
      
           
    }

    if (command === 'Party!') {
        let needSum = expectIncomeSum - income;
        console.log(`We need ${needSum.toFixed(2)} leva more.`);
    }

    console.log(`Club income - ${income.toFixed(2)} leva.`);
}


club(["100", "Sidecar", "7", "Mojito", "5", "White Russian", "10"]);
club(["500","Bellini","6","Bamboo","7","Party!"]);
