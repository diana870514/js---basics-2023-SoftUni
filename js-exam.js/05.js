function movieRating(input) {
    let index = 0;
    let numMovie = Number(input[index]);
    index++;
    

    
    let height = 0;
    let lowest = Number.MAX_SAFE_INTEGER;
    let nameHigh ='';
    let nameLowest ='';
    let averRating = 0;



    for (let i = 1; i <= numMovie; i++) {
        let nameMovie = input[index];
        index++;
       let ratingMovie = Number(input[index]);
        index++;

        if (height < ratingMovie) {
            height = ratingMovie;
            nameHigh = nameMovie;
        } else if (lowest > ratingMovie) {
            lowest = ratingMovie;
            nameLowest = nameMovie;
        }
        averRating += ratingMovie / numMovie;
    }
    console.log(`${nameHigh} is with highest rating: ${height}`);
    console.log(`${nameLowest} is with lowest rating: ${lowest}`);
    console.log(`Average rating: ${averRating.toFixed(1)}`);


}








movieRating(["5", "A Star is Born", "7.8", "Creed 2", "7.3", "Mary Poppins", "7.2", "Vice", "7.2", "Captain Marvel", "7.1"]);
movieRating(["3","Interstellar","8.5","Dangal","8.3","Green Book","8.2"]);