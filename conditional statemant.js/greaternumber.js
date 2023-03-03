function graeterNumber(input){
    let numA = Number(input[0]);
    let numB = Number(input[1]);

    if (numA > numB){
        console.log(numA);
    }else{
        console.log(numB);
    }
}
graeterNumber(['5','3']);
graeterNumber(['3','5']);
graeterNumber(['10','10']);
graeterNumber(['-5','5']);