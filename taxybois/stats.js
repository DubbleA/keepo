const fs = require('fs');
let rawdata = fs.readFileSync('largebasic.json');
function total (rawdata){
    
    let parsed = JSON.parse(rawdata);

    let soldPrice = 0;
    
    for(i = 0; i < parsed.length; i++){
        soldPrice += parsed[i].sale.soldPrice;
        console.log(parsed[i].sale.soldPrice);
    }

    console.log(soldPrice);
    

}

total();