const fs = require('fs');
function main (){
    
    var rawdata = fs.readFileSync('largebasicNEW.json');
    var parsed = JSON.parse(rawdata);
    
    var final = cleanup(parsed);


}

main();


function cleanup (parsed) {

    

}