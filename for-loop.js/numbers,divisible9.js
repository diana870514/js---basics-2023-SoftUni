function numbersDivisible9(input){
    let startNumber = Number(input[0]);
    let endNumber = Number(input[1]);
    let sum = 0;
    
    let buff = "";
    for(i = startNumber; i <= endNumber;i++){
       if(i % 9 == 0){
        sum += i;
        buff += i +"\n";
    
       }
        
    }
    console.log(`The sum: ${sum}`);
    console.log(buff);

}
numbersDivisible9(["100", "200"]);