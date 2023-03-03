function graduation(input) {
    let index = 0;
    let name = input[index];
    index++;

    let grade = Number(input[index]);
    index++;

    let i = 1;
    let sumGrade = 0;
    let countGrade = 0;
    let hasEnd = false;

    let badGradeCount = 0;
    while (i <= 12) {

        if (grade < 4.00) {

            badGradeCount++;
            if (badGradeCount === 2) {
                hasEnd = true;
                break;
            }
            grade = Number(input[index]);
            index++;
            continue;
        }
        i++;
        countGrade++
        sumGrade += grade;
        grade = Number(input[index]);
        index++;


    }
    if (hasEnd) {
        console.log(`${name} has been excluded at ${i} grade`);
    } else {
        console.log(`${name} graduated. Average grade: ${(sumGrade / countGrade).toFixed(2)}`);

    }



}




graduation(["Gosho", "5", "5.5", "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"]);
graduation(["Mimi","5","6","5","6","5","6","6","2","3"]);