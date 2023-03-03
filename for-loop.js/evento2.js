function evenTo2(input) {
    let n = Number(input[0]);
    for (let i = 0; i <= n; i += 2) {

        console.log(Math.pow(2,i));
    }
}
evenTo2(['3']);
evenTo2(['4']);
evenTo2(['5']);
evenTo2(['6']);