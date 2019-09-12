    var filepath = './brendan.csv';
    const fs = require('fs');
    const csv = require('csvtojson');
    var ret = "f";

function swiftCopConv(a) {
    csv({
        checkType: true,
        noheader: false,
        headers: ['date', 'item', 'size', 'cost', 'sellingPrice', 'platform', 'shippingCost', 'baseFee', 'cashoutFee', 'totalFee', 'totalAfterFees', 'grossIncome', 'profit', '', 'Month']
    })
        .fromFile(a)
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
           
            
            
            var tempdata = '[' + finaljson.slice(0, jsonObj.length + 1) + ']';

            ret = JSON.parse(tempdata);
            console.log(ret[1].platform);
            //console.log(tempdata);
            //console.log(ret);
            
            

        });
        return ret;
}


var blah = swiftCopConv(filepath);
console.log(blah);
