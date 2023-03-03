function circleAndPerimetar(input){
    let r = Number(input['0']);
    let  calculatedArea = (Math.PI * r * r).toFixed(2);
    console.log(calculatedArea);
    let calculatedParameter = (2 * Math.PI * r).toFixed(2);
    console.log(calculatedParameter);

}
circleAndPerimetar(['3']);
circleAndPerimetar(['4.5'])