const csvToJson = require('convert-csv-to-json');
const fs = require('fs');

function main (){

    var filepath = csvConv('./brendan.csv');
    var writeto = './largebasic.json';
    //console.log(bobbert);
    //storeStringswift(bobbert);
    var final = writeFile(storeStringswift(filepath), writeto);
    final = JSON.parse(final);

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
    //console.log(finaljson[0].Item);
    return finaljson;
}

function ifCity(verify){
    let final = '';
    
    if (verify != null && verify.length != 0) {
        final = verify;
    }
    if (verify != null && verify.indexOf('$') != -1) {
        final = verify.replace(/\$/g, '');
    }   
    return final;
}

function storeStringswift(parsed) {
    let final = [];

    var category = '';
    var date = '';
    var brand = '';
    var name = '';
    var SKU = '';
    var retail = '';
    var shippingCost = '';
    var color = '';
    var size = '';
    var condition = '';
    var notes = '';

    var market = "";
    var orderNum = "";
    var trackingNum = "";
    var saleDate = "";
    var soldPrice = "";
    var totalAfterFees = "";
    var notes = "";


    //console.log(parsed[0].brand);

    for (i = 0; i < parsed.length; i++) {
        
        category = ifCity(parsed[i].category);
        date = ifCity(parsed[i].Date);
        brand = ifCity(parsed[i].brand);
        name = ifCity(parsed[i].Item);
        SKU = ifCity(parsed[i].SKU);
        retail = ifCity(parsed[i].Cost);
        shippingCost = ifCity(parsed[i].Shipping);
        color = ifCity(parsed[i].color);
        size = ifCity(parsed[i].Size);
        condition = ifCity(parsed[i].condition);
        notes = ifCity(parsed[i].notes);

        market = ifCity(parsed[i].Platform);
        orderNum = ifCity(parsed[i].orderNum);
        trackingNum = ifCity(parsed[i].trackingNum);
        saleDate = ifCity(parsed[i].saleDate);
        soldPrice = ifCity(parsed[i].SellingPrice);
        totalAfterFees = ifCity(parsed[i].TotalAfterFees);
        notes = ifCity(parsed[i].notes);




        var inventory = {
            category: category,
            date: date,
            brand: brand,
            name: name,
            SKU: SKU,
            retail: retail,
            shippingCost: shippingCost,
            color: color,
            size: size,
            condition: condition,
            notes: notes
        }
        var sale = {
            market: market,
            orderNum: orderNum,
            trackingNum: trackingNum,
            saleDate: saleDate,
            soldPrice: soldPrice,
            totalAfterFees: totalAfterFees,
            notes: notes
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
        var cside = {
            customerId: '',
            pic: '',
            itemId: '',
            currentLowestAsk: '',
        }
        var jso = {
            inventory: inventory,
            sale: sale,
            expense: expense,
            cside: cside
        };
        final.push(JSON.stringify({
            jso
        }, null, 2).slice(10, (JSON.stringify({
            jso
        }, null, 2).length - 1)));
    }
    
    var tempdata = '[' + final.slice(0, parsed.length + 1) + ']';
    //fs.writeFileSync('testing.json', tempdata, 'utf8');
    var newdata = JSON.parse(tempdata);
    //console.log(newdata[2].inventory.name);
    
    return newdata;

}


function writeFile(newdata, path) {
    //make a different write file function
    //that makes sure you dont add duplicate sales
    //and orders the dates

    final = [];

    if (fs.existsSync(path)) {
        var currdata = fs.readFileSync('largebasic.json');
        var cparsed = JSON.parse(currdata);

        //console.log(newdata[2].inventory.name);
        //console.log(cparsed[2].inventory.name);


        var first = JSON.stringify(cparsed);
        var temp = first.slice(0, -1);
        var second = JSON.stringify(newdata);
        var temp2 = second.slice(1);

        final.push(temp);
        final.push(temp2);
       
        fs.writeFile('largebasicNEW.json', final, 'utf8');

        return final;
    }

    else {
        //fs.writeFileSync('largebasicf.json', newdata, 'utf8');
        console.log('else');
    }

}

