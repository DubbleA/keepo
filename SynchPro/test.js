const tools = require('./tools.js');
var T = new tools();

// var emails = T.genDots("bofwfwfb@gmail.com", 1000);
// console.log(emails);

var addy = T.l2(1);
console.log(addy);


const pConv = require('./pConv.js');
var p = new pConv();
var fp = './synch.csv';
var test = p.syncToString(p.csvConv(fp));
console.log(test)