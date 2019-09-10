
function totalStockX (){
    const fs = require('fs');
    let rawdata = fs.readFileSync('largebasic.json');
    let parsed = JSON.parse(rawdata);

    let soldPrice = 0;
    
    for(i = 0; i < parsed.length; i++){
        soldPrice += parsed[i].sale.soldPrice;
        console.log(parsed[i].sale.soldPrice);
    }

    console.log(soldPrice);
    

}

function testStockX(){
    const fs = require('fs');
    let rawdata = fs.readFileSync('largebasic.json');
    let parsed = JSON.parse(rawdata);
    for(i=0;i<parsed.length;i++){
        if (parsed[i].sale.market == "stockX"){
            console.log("bobbo")
        }
        else{
            console.log("not bobbotebto")
        }
    }
    
}
testStockX();
totalStockX();