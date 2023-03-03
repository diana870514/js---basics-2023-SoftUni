function cinemaTicket(input) {
    let index = 0;
    let command = input[index];
    index++;

    let studenTicket = 0;
    let standardTicket = 0;
    let kidTicket = 0;

    while (command !== 'Finish') {
        let movieName = command;


        let freeSpaces = Number(input[index]);
        index++;

        let command1 = input[index];
        index++;
        let spacesTAken = 0;
        while (command1 !== 'End') {
            let typeTicket = command1;

            if (typeTicket === 'student') {
                studenTicket++;
            } else if (typeTicket === 'standard') {
                standardTicket++;
            } else {
                kidTicket++;
            }
            spacesTAken++;


            if (spacesTAken === freeSpaces) {
                break;
            }
            command1 = input[index];
            index++;
        }
        let percentFull = (spacesTAken / freeSpaces) * 100;
        console.log(`${movieName} - ${percentFull.toFixed(2)}% full.`);

        command = input[index];
        index++;
    }
    let totalTicket = studenTicket + standardTicket + kidTicket;
    console.log(`Total tickets: ${totalTicket}`);

    let percentStudenTicket = (studenTicket / totalTicket) * 100;
    let percentStandardTicket = (standardTicket / totalTicket) * 100;
    let percentKidTicket = (kidTicket / totalTicket) * 100;


    console.log(`${percentStudenTicket.toFixed(2)}% student tickets.`);
    console.log(`${percentStandardTicket.toFixed(2)}% standard tickets.`);
    console.log(`${percentKidTicket.toFixed(2)}% kids tickets.`);





}


cinemaTicket(["Taxi", "10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"]);