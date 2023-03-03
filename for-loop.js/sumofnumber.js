function sumOfNumber(input){
    let n = input[0];
    let sum = 0;
    for(let i = 0; i < n.length; i++){
        let currentNumbers = Number(n[i]);
        sum += currentNumbers
    }
    console.log(`The sum of the digits is:${sum}`);

}
sumOfNumber(["1234"]);
sumOfNumber(["564891"]);