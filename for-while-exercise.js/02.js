function exam(input) {
    let index = 0;

    let maxBadGrade = Number(input[index]);
    index++;
    let exam = input[index];
    index++;

    let problemGrade = Number(input[index]);
    index++;

    let badGradeCounter = 0;
    let sum = 0;
    let sumCounter = 0;
    let lastProblem = '';
    while (exam !== "Enough") {
        lastProblem = exam;
        if (problemGrade <= 4) {
            badGradeCounter++;
            if (badGradeCounter === maxBadGrade) {
                console.log(`You need a break, ${badGradeCounter} poor grades.`);
                return;


            }
        }


        sumCounter++;
        sum += problemGrade;

        exam = input[index];
        index++;

        problemGrade = Number(input[index]);
        index++;


    }

    console.log(`Average score: ${(sum / sumCounter).toFixed(2)}`);
    console.log(`Number of problems: ${sumCounter}`);
    console.log(`Last problem: ${lastProblem}`);







}

exam(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);
exam(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"]);
