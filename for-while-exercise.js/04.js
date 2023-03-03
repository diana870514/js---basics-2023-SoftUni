function steps(input) {
    let index = 0;
    let command = input[index];
    index++;

    let walkDay = 0;

    let stepsPerDay = 10000;
    let stepDay = 0;
    let lastDay = Number(input[index]);

    while (command !== "Going home") {
        let sumSteps = Number(command);
        command = input[index];
        index++;

        stepDay += sumSteps;
        if (stepDay >= stepsPerDay) {
            console.log("Goal reached! Good job!");
            console.log(`${Math.abs(stepDay - stepsPerDay)} steps over the goal!`);
            return;

        }

    }
    command = input[index];
    index++;
    lastDay = Number(command);
    if (command !== 'Going home') {

        beforeGoal = stepDay + lastDay;
        if (beforeGoal < stepsPerDay) {
            console.log(`${Math.abs(beforeGoal - stepsPerDay)} more steps to reach goal.`);
        }else{
            console.log("Goal reached! Good job!");
            console.log(`${Math.abs(beforeGoal - stepsPerDay)} steps over the goal!`);
            
        }


    }
}




steps(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);
steps(["1500","300","2500","3000","Going home","200"]);
