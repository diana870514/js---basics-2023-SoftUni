function passowrd(input){
    let index = 0;
    let userName = input[index];
    index++;
    let passWord = input[index];
    index++;
    let temPassword = input[index];
    index++
    while (passWord !== temPassword){
       temPassword = input[index];
        index++;
       
    }
    console.log(`Welcome ${userName}!`);
   
}
passowrd(["Nakov","1234","Pass","1324","1234"]);