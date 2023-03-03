function cake(input){
    let index = 0;
    let length = Number(input[index]);
    index++;
    let width = Number(input[index]);
    index++;
    let command = input[index];
    index++;

    let sizeCake = length * width;
    while(command !== 'STOP'){
        let allCakes = Number(command);
        command = input[index];
        index++;
        sizeCake -= allCakes;
        if(sizeCake < 0){
        console.log(`No more cake left! You need ${Math.abs(sizeCake)} pieces more.`);
        return;
        }

       


    }
    let numbCakes = Number(command);
        command = input[index];
        index++;

    if(command === 'STOP'){
        sizeCake -= numbCakes;

    }
    console.log(`${sizeCake} pieces are left.`);

    

}
cake(["10","10","20","20","20","20","21"]);
cake(["10","2","2","4","6","STOP"]);