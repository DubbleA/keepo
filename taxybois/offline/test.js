// function main (){

//     // var csv = './brendan.csv';
//     // var combineWith = './largebasic.json';

//     // var final = JSON.parse(writeFile(storeStringswift(csvConvSwift(csv)), combineWith));
//     // console.log(final[4].inventory.name);

//     var csv = './StockX.csv';
//     //var final = csvConv(csv);
//     //console.log(final);
//     //final = storeStringStockX(final);
    
//     var final = writeFile(storeStringStockX(csvConv(csv)));
//     var bob = JSON.parse(final);
//     console.log(bob[7].inventory.name);
// }   
// main();

const stats = require('./stats.js');
var stats = new stats();
stats.total();