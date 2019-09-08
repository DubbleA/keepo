

function swiftcsvConv() {
    const filepath = 'swifttest.csv'
    const fs = require('fs');
    const csv = require('csvtojson');
    csv({
        checkType: true,
        noheader: false,
        headers: ['date', 'item', 'size', 'cost', 'sellingPrice', 'platform', 'shippingCost', 'baseFee', 'cashoutFee', 'totalFee', 'totalAfterFees', 'grossIncome', 'profit', '', 'Month']
    })
        .fromFile(filepath)
        .then((jsonObj) => {
            var finaljson = [];
            for (var i = 0; i < jsonObj.length; i++) {
                var json = jsonObj[i];
            
                var csv = {
                    date: jsonObj[i]["date"],
                    item: jsonObj[i]["item"],
                    size: jsonObj[i]["size"],
                    cost: jsonObj[i]["cost"],
                    sellingPrice: jsonObj[i]["sellingPrice"],
                    platform: jsonObj[i]["platform"],
                    shippingCost: jsonObj[i]["shippingCost"],
                    baseFee: jsonObj[i]["baseFee"],
                    cashoutFee: jsonObj[i]["cashoutFee"],
                    totalFee: jsonObj[i]["totalFee"],
                    totalAfterFees: jsonObj[i]["totalAfterFees"],
                    grossIncome: jsonObj[i]["grossIncome"],
                    profit: jsonObj[i]["profit"]
                };

                finaljson.push(JSON.stringify({
                    csv
                }, null, 2).slice(10, (JSON.stringify({
                    csv
                }, null, 2).length - 1)));
            }
           
            fs.writeFile('swiftcsvConv.json', '[' + finaljson.slice(0, jsonObj.length + 1) + ']', 'utf8');
            
        });

}

// function stockXcsvConv() {
//     const filepath = 'stockXtest.csv'
//     const fs = require('fs');
//     const csv = require('csvtojson');
//     csv({
//             checkType: true,
//             noheader: false,
//             headers: ['item', 'name', 'size', 'SKU', 'orderNum', 'sellingPrice', 'currency', 'finalPayout', 'finalCurrency', 'payMethod', 'date', 'status']
//         })
//         .fromFile(filepath)
//         .then((jsonObj) => {
//             var finaljson = [];
//             for (var i = 0; i < jsonObj.length; i++) {
//                 var json = jsonObj[i];

//                 var csv = {
//                     brand: jsonObj[i]["item"],
//                     name: jsonObj[i]["name"],
//                     size: jsonObj[i]["size"],
//                     SKU: jsonObj[i]["SKU"],
//                     orderNum: jsonObj[i]["orderNum"],
//                     sellingPrice: jsonObj[i]["sellingPrice"],
//                     totalAfterFees: jsonObj[i]["finalPayout"],
//                     payMethod: jsonObj[i]["payMethod"],
//                     date: jsonObj[i]["date"],                
//                     platform: "stockX"
                    
//                 };

//                 finaljson.push(JSON.stringify({
//                     csv
//                 }, null, 2).slice(10, (JSON.stringify({
//                     csv
//                 }, null, 2).length - 1)));
//             }
//             fs.writeFile('stockXcsvConv.json', '[' + finaljson.slice(0, jsonObj.length + 1) + ']', 'utf8');
            
//         });
// }

function storeString(){
    const fs = require('fs');
    let final = [];
    let rawdata = fs.readFileSync('stockXcsvConv.json');
    let parsed = JSON.parse(rawdata);
    //console.log(parsed[0].brand);

    for(i = 0; i < parsed.length; i++){
        //console.log(parsed[i].brand);
        
        var inventory = {
            category: "",
            brand: parsed[i].brand,
            name: parsed[i].name,
            SKU: parsed[i].SKU,
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

    fs.writeFile('largebasic.json', '[' + final.slice(0, parsed.length + 1) + ']', 'utf8');


}


storeString();