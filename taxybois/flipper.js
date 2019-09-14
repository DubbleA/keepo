const csvToJson = require('convert-csv-to-json');
const fs = require('fs');

function main (){

    var bobbert = csvConv('./brendan.csv');
    //console.log(bobbert);
    storeStringswift(bobbert);



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
            //console.log(jsonObj[i])
        }

    }

    return finaljson;
}

function ifCity(parsed, i){
    let final = [];
    var item = ''; 
    var brand= '';
    var SKU = '';
    var retail = '';
        if (parsed[i].Item != null || (parsed[i].brand.length != 0)) {
            brand = parsed[i].brand;
            final.push(brand);
        }
        if (parsed[i].Item != null || (parsed[i].Item.length != 0)) {
            item = parsed[i].Item;
            final.push(item);
        }
        if (parsed[i].SKU != null || (parsed[i].SKU.length != 0)) {
            SKU = parsed[i].SKU;
            final.push(SKU);
        }
        if (parsed[i].retail != null || (parsed[i].retail.length != 0)) {
            retail = parsed[i].retail;
            final.push(retail);
        }
        console.log(final);
    return final;
}

function storeStringswift(parsed) {
    let final = [];
    //console.log(parsed[0].brand);

    for (i = 0; i < parsed.length; i++) {
        //console.log(parsed[i].brand);
        //ifCity(parsed, i);
        var inventory = {
            category: "",
            brand: parsed[i].brand,
            name: parsed[i].Item,
            SKU: parsed[i].SKU,
            retail: parsed[i].Cost,
            shippingCost: parsed[i].Shipping,
            color: "",
            size: parsed[i].Size,
            condition: "new",
            notes: ""
        }
        var sale = {
            market: parsed[i].Platform,
            orderNum: parsed[i].orderNum,
            trackingNum: "",
            saleDate: parsed[i].Date,
            soldPrice: parsed[i].SellingPrice,
            totalAfterFees: parsed[i].TotalAfterFees,
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

    var tempdata = '[' + final.slice(0, parsed.length + 1) + ']';

    fs.writeFile('largebasicf.json', '[' + final.slice(0, parsed.length + 1) + ']', 'utf8');

}