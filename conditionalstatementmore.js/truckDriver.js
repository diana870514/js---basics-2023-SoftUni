function truckDriver(input) {
    let season = input[0];
    let kmForMonth = Number(input[1]);

    let sum = 0;
    let result = 0;
    let salary = 0;


    switch (season) {
        case 'Spring':
        case 'Autumn':
            if (kmForMonth <= 5000) {
                sum = kmForMonth * 0.75;
                

            } else if (kmForMonth > 5000 && kmForMonth <= 10000) {
                sum = kmForMonth * 0.95;
                
            } else if (kmForMonth > 10000 && kmForMonth <= 20000) {
                sum = kmForMonth * 1.45;
               
            }
            ;break;
        case 'Summer':
            if (kmForMonth <= 5000) {
                sum = kmForMonth * 0.90;
              
            } else if (kmForMonth > 5000 && kmForMonth <= 10000) {
                sum = kmForMonth * 1.10;
              
            } else if (kmForMonth > 10000 && kmForMonth <= 20000) {
                sum = kmForMonth * 1.45;
              
            }
            ;break;
        case 'Winter':
            if (kmForMonth <= 5000) {
                sum = kmForMonth * 1.05;
              
            } else if ( kmForMonth > 5000 && kmForMonth <= 10000) {
                sum = kmForMonth * 1.25;
                
            } else if ( kmForMonth > 10000 && kmForMonth <= 20000) {
                sum = kmForMonth * 1.45;
               
            }
            ;break;
            

    }
    result = sum * 4;
    salary = result -(result * 0.10);
    console.log(salary.toFixed(2));

}
truckDriver(['Summer', '3455']);
truckDriver(['Winter','4350']);