function numbers(input) {
 let index = 0;
 index++;
 let sum = Number(input[index]);
 index++;
 
 
while (index < input.length){
  sum += Number(input[index]);
  index++;
  
    
  }
  console.log(sum);
    

   
   
    
  }
 

numbers(["100", "10", "20", "30", "40"]);
numbers(["20", "1", "2", "3", "4", "5", "6"]);