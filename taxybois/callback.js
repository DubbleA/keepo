const asynchronousFunction = callback => {
    fetch('./file.json').then(response => {
        csv({
                checkType: true,
                noheader: false,
                headers: ['date', 'item', 'size', 'cost', 'sellingPrice', 'platform', 'shippingCost', 'baseFee', 'cashoutFee', 'totalFee', 'totalAfterFees', 'grossIncome', 'profit', '', 'Month']
            })
            .fromFile('./brendan.csv')
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
                //console.log(ret[1].platform);
                //console.log(tempdata);
                //console.log(ret);

                return 1;

            });
        callback(response)
    })
}
const mainFunction = () => {
    const callback = result => {
        console.log(result)
    }

    asynchronousFunction(callback)
}