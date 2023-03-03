function oldLibraly(input){
    let index = 0;
    let bookSearched = input[index];
    index++;
    let command = input[index];
    index++;
   
   let count = 0;


    while(command !=="No More Books"){
       
        if(bookSearched == command ){
          
        console.log(`You checked ${count} books and found it.`);
        break;
    }
    count++
        command = input[index];
        index++;
        
    }
    if(command === "No More Books"){
        console.log("The book you search is not here!");
        console.log(`You checked ${count} books.`);
        
    }

}
oldLibraly(["Troy","Stronger","Life Style","Troy"]);
oldLibraly(["The Spot","Hunger Games","Harry Potter","Torronto","Spotify","No More Books"]);
oldLibraly(["Bourne","True Story","Forever","More Space","The Girl","Spaceship","Strongest","Profit","ripple","Stella","The Matri","Bourne"]);


