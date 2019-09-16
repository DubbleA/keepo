const fs = require('fs');
function main (){
    
    var rawdata = fs.readFileSync('largebasicNEW.json');
    var parsed = JSON.parse(rawdata);
    console.log(total(parsed));

}

function total (parsed) {
    var rev = 0;
    var taf = 0;
    var counter = 0;
    for(i = 0; i < parsed.length; i++){
        rev = rev + Number(parsed[i].sale.soldPrice);
        taf = taf + Number(parsed[i].sale.totalAfterFees);
        counter++;
    }
    console.log(taf);
    console.log(counter);
    return rev;
}

main();

