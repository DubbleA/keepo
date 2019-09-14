const csvToJson = require('convert-csv-to-json');
const fs = require('fs');

function main (){

    var bobbert = csvConv('./brendan.csv');
    console.log(bobbert);
    storeString(bobbert);



}
main();

function csvConv(csvFilePath) {
    var jsonObj = csvToJson.fieldDelimiter(',').getJsonFromCsv(csvFilePath);
    finaljson = [];

    for (var i = 0; i < jsonObj.length; i++) {
        let j = 0; 

        if ( (jsonObj[i].Item.length == 0) || (jsonObj[i].Date.includes('Totals:')) ) {
            // code to skip shit thats blank
            
        }
        else {
            finaljson.push(jsonObj[i]);
        }

    }

    return finaljson;
}

function storeStringswift(parsed) {
    let final = []
    console.log(parsed[0].brand);

    for (i = 0; i < parsed.length; i++) {
        //console.log(parsed[i].brand);

        var inventory = {
            category: "",
            brand: parsed[i].brand,
            name: parsed[i].name,
            SKU: parsed[i].SKU,
            retail: "",
            color: "",
            size: parsed[i].size,
            condition: "new",
            notes: ""
        }
        var sale = {
            market: parsed[i].platform,
            orderNum: parsed[i].orderNum,
            trackingNum: "",
            saleDate: parsed[i].date,
            soldPrice: parsed[i].sellingPrice,
            totalAfterFees: parsed[i].totalAfterFees,
            notes: ""
        }
        var expense = {
            expenseName: "",
            expensePrice: "",
            expenseReason: "",
            expenseDateStart: "",
            expenseOccurance: "",
            expenseEnded: "",
            expenseNotes: ""
        }
        var jso = {
            inventory: inventory,
            sale: sale,
            expense: expense,
        };
        final.push(JSON.stringify({
            jso
        }, null, 2).slice(10, (JSON.stringify({
            jso
        }, null, 2).length - 1)));
    }

    fs.writeFile('largebasicf.json', '[' + final.slice(0, parsed.length + 1) + ']', 'utf8');

}