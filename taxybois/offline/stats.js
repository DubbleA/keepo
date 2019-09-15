const fs = require('fs');
function main (){
    
    var rawdata = fs.readFileSync('largebasicNEW.json');
    var parsed = JSON.parse(rawdata);
    console.log(total(parsed));

}

function total (parsed) {
    var rev = 0;
    for(i = 0; i < parsed.length; i++){
        rev = rev + Number(parsed[i].sale.soldPrice);
    }
    return rev;
}

main();

