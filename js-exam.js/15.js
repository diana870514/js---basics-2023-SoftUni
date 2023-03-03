function renovation(input) {
    let index = 0;
    let hight = Number(input[index]);
    index++;
    let width = Number(input[index]);
    index++;
    let percent = Number(input[index]) / 100;
    index++;
    let command = input[index];
    index++;

   
   
    let wallColor = hight * width * 4;
    let percentNoColorWall = wallColor - (wallColor * percent);




    while (command !== 'Tired!') {
        let literColor = Number(command);
        percentNoColorWall -= literColor;
        
        if (percentNoColorWall < 0) {
            console.log(`All walls are painted and you have ${Math.abs(percentNoColorWall)} l paint left! `);
            break;

        }
        if (percentNoColorWall == 0) {
            console.log("All walls are painted! Great job, Pesho!");
            break;


        }
        command = input[index];
        index++;
    }

    if (command === 'Tired!') {
        
        console.log(`${Math.ceil(percentNoColorWall)} quadratic m left.`);
    }

    
}




renovation(["3", "5", "10", "2", "3", "4", "Tired!"]);
renovation(["2",
    "3",
    "25",
    "6",
    "7",
    "8"])