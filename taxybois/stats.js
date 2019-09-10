    const filepath = 'largebasic.json'
    const fs = require('fs');
    
    let rawdata = fs.readFileSync('largebasic.json');
    let parsed = JSON.parse(rawdata);

function total (parsed){
    let soldPrice = 0;
    
    for(i = 0; i < parsed.length; i++){
        soldPrice += parsed[i].soldPrice
    }

    console.log(soldPrice);
    

}

total();