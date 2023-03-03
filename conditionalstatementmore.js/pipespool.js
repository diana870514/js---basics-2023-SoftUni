function pipesPool(input){
    let value = Number(input[0]);
    let p1 = Number(input[1]);
    let p2 = Number(input[2]);
    let h = Number(input[3]);
    let firstPipe = p1 * h ;
    let secondPipe = p2 * h;
    let bothPipes = firstPipe + secondPipe;
   if (bothPipes < value ){
     allPrecentValue = ((bothPipes / value) * 100).toFixed(2);
     pipeOne = ((firstPipe / bothPipes) * 100).toFixed(2);
     pipeSecond = ((secondPipe / bothPipes) * 100).toFixed(2);
     console.log(`The pool is ${allPrecentValue}% full. Pipe 1: ${pipeOne}%. Pipe 2: ${ pipeSecond }%.`);

    }else{
      leftWater = bothPipes - value;
      console.log(`For ${h} hours the pool overflows with ${leftWater} liters.`);
      
    }
          
          
   

    }

  
   
    





pipesPool(['1000','100','120','3']); 
pipesPool(['100','100','100','2.5']); 

