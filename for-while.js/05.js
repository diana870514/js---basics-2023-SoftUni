function acountNumber(input){
let acount = 0;

let index = 0;

let comand = input[index];
index++

while ( comand !== "NoMoreMoney"){
    let money = Number(comand);
    if(money < 0){
        console.log("Invalid operation!");
        break;
    }
    acount += money;
    console.log(`Increase: ${money.toFixed(2)}`);



    comand = input[index];
    index++;

}
console.log(`Total: ${acount.toFixed(2)}`);


}
acountNumber(["5.51","69.42","100","NoMoreMoney"]);