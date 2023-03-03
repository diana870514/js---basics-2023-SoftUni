function movieStar(input) {
    let index = 0;
    let budget = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let sum = 0;
    let hasFinish = false;






    while (command !== 'ACTION') {
        let nameActor = command;

        let salaryActor = Number(input[index])
        index++;
        sum += budget - salaryActor;

        if (nameActor.length > 15) {
            sum *= 0.80;
        }else{
            hasFinish = true;
           break;
           
        }

        
        command = input[index];
        index++;
    }
    if(hasFinish){
        let needSum = sum - budget;
        console.log(`We need ${needSum} leva for our actors.`);
        
    }else{
        let leftSum = budget - sum ;
        console.log(`We are left with ${leftSum} leva.`);
    }


    

}





movieStar(["90000", "Christian Bale", "70000.50", "Leonard DiCaprio", "Kevin Spacey", "24000.99"]);
