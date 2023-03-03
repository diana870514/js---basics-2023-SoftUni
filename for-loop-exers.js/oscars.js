function oscars(input) {
    let index = 0;
    let name = input[index];
    index++;

    let pointFromAcademy = Number(input[index]);
    index++;

    let n = Number(input[index]);
    index++;

    for(let i = 0; i < n; i++){
        let currName = input[index];
        index++;

        let currPoint = Number(input[index]);
        index++;

        let totalPoints = currName.length * currPoint / 2;
        if(pointFromAcademy <= 1250.5){
            pointFromAcademy += totalPoints;
        }
    }
    if(pointFromAcademy <= 1250.50){
        let diff = Math.abs(pointFromAcademy - 1250.5);
        console.log(`Sorry, ${name} you need ${diff.toFixed(1)} more!`);
    }else{
        console.log(`Congratulations, ${name} got a nominee for leading role with ${pointFromAcademy.toFixed(1)}!`);
    }
}


oscars(["Zahari Baharov", "205", "4", "Johnny Depp", "45", "Will Smith", "29", "Jet Lee", "10", "Matthew Mcconaughey", "39"]);
oscars(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"]);

