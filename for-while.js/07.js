function minNumber(input){
    let index = 0;
    let comand = input[index];
    index++;
     let minNumber = Number.MAX_SAFE_INTEGER;
     while(comand !== "Stop"){
        let num = Number(comand);
        if(minNumber > num){
            minNumber = num;
        }


        comand = input[index];
        index++;
     }
     console.log(minNumber);

}
minNumber(["100","99","80","70","Stop"]);