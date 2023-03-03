function salary(input) {
    let n = Number(input[0]);
    let salary = Number(input[1]);
    

   

  
    for (let i = 2; i < input.length; i++) {
        let page = input[i];
       
        if (page == "Facebook") {
            salary -= 150;
        }else if (page == 'Instagram') {
            salary -= 100;
        }else if(page == 'Reddit'){
            salary -= 50;
        }else{
            salary -= 0;
        }
    }
    if(salary <= 0){
        console.log("You have lost your salary.");
    }else{
        console.log(`${salary}`);
    }
   


}
salary(["10", "750", "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"]);
salary(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"]);
salary(["3", "500", "Facebook", "Stackoverflow.com", "softuni.bg"]);