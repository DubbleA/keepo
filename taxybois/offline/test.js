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



// const fs = require('fs');
// const stats = require('./stats.js');
// var stat = new stats();
// var rawdata = fs.readFileSync('./bigbasicNEW.json');
// var parsed = JSON.parse(rawdata);
// console.log(stat.taf(parsed));
// let rev = stat.totalSoldPrice(parsed)
// console.log(rev);
// console.log(stat.totalSalesNum(parsed));
// console.log(stat.ROI(parsed));
// console.log(stat.inventory(parsed));

// const fConv = require("./fConv.js");
// var finConv = new fConv();
// //var finConv = new finConv();


// //var fpath = './FCinv.csv';
// var fpath = './brendan.csv';


// var news = finConv.csvConv(fpath);
// console.log(news);


// var jeff = JSON.parse(finConv.writeNewFile(finConv.storeStringSwift(finConv.csvConv(fpath))));
// //console.log(jeff[3].inventory.name);


const conv = require('./conv.js');
var finConv = new conv();
var swift = './brendan.csv';
var FCinv = './FCinv.csv'
console.log(finConv.storeString(finConv.csvConv(FCinv), 'FC', 'listed'));