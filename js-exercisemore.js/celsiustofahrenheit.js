function celsiusToFahrenheit(input){
    let degreeCelsius = Number(input[0]);
    let degreeFarenheit = (degreeCelsius * 1.8 + 32).toFixed(2);
    console.log(degreeFarenheit);

}
celsiusToFahrenheit(['25']);
celsiusToFahrenheit(['0']);
celsiusToFahrenheit(['-5.5']);
celsiusToFahrenheit(['32.3']);