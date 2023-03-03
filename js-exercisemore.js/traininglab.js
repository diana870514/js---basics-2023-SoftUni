function trainingLab(input){
    let weightRow = Number(input[0]);
    let heightRow = Number(input[1]);
    let deskWeight = weightRow * 100;
    let rowHeightDesk = (heightRow * 100) - 100;
    let deskInRow = Math.floor(rowHeightDesk / 70);
    let rowPlace =Math.floor (deskWeight / 120);
    let total = ((deskInRow * rowPlace) - 3).toFixed(0);
    console.log(total);

    
    


}
trainingLab(['15','8.9']);
trainingLab(['8.4','5.2']);