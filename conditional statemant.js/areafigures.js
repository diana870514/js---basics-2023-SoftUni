function areaOfFigures(input){
    let figure = input[0];

    if(figure == 'square'){
        let a = Number(input[1]);
        let side = (a * a).toFixed(3);
        console.log(side);
        
      
    }else if (figure == 'rectangle'){
        let x = Number(input[1]);
        let y = Number(input[2]);
        let side =(x * y).toFixed(3);
        console.log(side);
        

    }else if (figure == 'circle'){
        let r = Number(input[1]);
        let side = (Math.PI * Math.pow(r ,2)).toFixed(3);
        console.log(side);
    }else if(figure == 'triangle'){
        let b = Number(input[1]);
        let h = Number(input[2]);
        let side = ((b * h / 2).toFixed(3));
        console.log(side);
    }

}
areaOfFigures(['square','5']);
areaOfFigures(['rectangle','7','2.5']);
areaOfFigures(['circle','6']);
areaOfFigures(['triangle','4.5','20']);

