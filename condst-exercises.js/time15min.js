function timeTo15(input){
    let hour = Number(input[0]);
    let minute = Number(input[1]);

    let timeMin = hour * 60 + minute;
    let timePlus15 = timeMin + 15;

    let finalHour = Math.floor(timePlus15 / 60);
    let finalMin = timePlus15 % 60;



}

timeTo15(['23','59']);