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



const fs = require('fs');
const stats = require('./stats.js');
var stat = new stats();
var rawdata = fs.readFileSync('./bigbasicNEW.json');
var parsed = JSON.parse(rawdata);
console.log(stat.taf(parsed));
let rev = stat.totalSoldPrice(parsed)
console.log(rev);

// const fConv = require("./fConv.js");
// var finConv = new fConv();
// //var finConv = new finConv();


// //var fpath = './FCinv.csv';
// var fpath = './brendan.csv';


// var news = finConv.csvConv(fpath);
// console.log(news);


//var jeff = JSON.parse(finConv.writeNewFile(finConv.storeStringSwift(finConv.csvConv(fpath))));
//console.log(jeff[3].inventory.name);