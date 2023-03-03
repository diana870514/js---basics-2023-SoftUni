function cinemaVoucher(input) {

    let voucher = Number(input[0]);
    let index = 0;
    let product = input[index];
    index++;


    let price = 0;
    let ticket = 0;
    let othersProduct = 0;
    while (product !== 'End') {
        product = input[index];
        index++;



        if (product.length > 8) {
            price = product[0] + product[1];

            if (voucher <= price) {
                voucher -= price;
            } else {
                break;
            }
            ticket++;
        } else {
            price = product[0];
        }
        if (voucher >= price) {
            voucher -= price;
        } else {
            break;
        }

        product = input[index];
        index++;
    }
    othersProduct++;


    console.log(`${ticket}`);
    console.log(`${othersProduct}`);


}


cinemaVoucher(["300", "Captain Marvel", "popcorn", "Pepsi"]);