function maxNumber(input){
    let index = 0;
    let comand = input[index];
    index++;
    let maxNumb = Number.MIN_SAFE_INTEGER;
   
    while (comand !== "Stop"){
        let num = Number(comand);
        if(maxNumb < num){
            maxNumb = num;
        }

        comand = input[index];
        index++;
      
        
    }
    console.log(maxNumb);

}
maxNumber(["100","99","80","70","Stop"]);
