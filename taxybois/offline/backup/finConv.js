


module.exports = class finConv {

    constructor() {}

    swiftConv(csv, combineWith) {
        return JSON.parse(this.writeFile(this.storeStringSwift(this.csvConvSwift(csv)), combineWith));
    }
    stockXConv(csv, combineWith) {
        return JSON.parse(this.writeFile(this.storeStringStockX(this.csvConvStockX(csv)), combineWith));
    }

    FCSaleConv(csv, combineWith) {
        return JSON.parse(this.writeFile(this.storeStringFCSale(this.csvConvFC(csv)), combineWith));
    }

    FCinvConv(csv, combineWith) {
        return JSON.parse(this.writeFile(this.storeStringFCinv(this.csvConvFC(csv)), combineWith));
    }

    SGSaleConv(csv, combineWith) {
        return JSON.parse(this.writeFile(this.storeStringSGSale(this.csvConvSG(csv)), combineWith));
    }

    SGinvConv(csv, combineWith) {
        return JSON.parse(this.writeFile(this.storeStringSGinv(this.csvConvSG(csv)), combineWith));
    }

    csvConvSwift(csvFilePath) {
        var jsonObj = csvToJson.fieldDelimiter(',').getJsonFromCsv(csvFilePath);
        finaljson = [];

        for (var i = 0; i < jsonObj.length; i++) {

            if ((jsonObj[i].Item.length == 0) || (jsonObj[i].Date.includes('Totals:')) || jsonObj[i] == undefined) {
                // code to skip shit thats blank

            } else {
                finaljson.push(jsonObj[i]);
                //console.log(jsonObj[i])
            }

        }
        //console.log(finaljson[0].Item);
        return finaljson;
    }

    storeStringSwift(parsed) {
        var final = [];

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

        var expenseName = "";
        var expensePrice = "";
        var expenseReason = "";
        var expenseDateStart = "";
        var expenseOccurance = "";
        var expenseEnded = "";
        var expenseNotes = "";

        var customerId = "";
        var pic = "";
        var itemId = "";
        var currentLowestAsk = "";

        //console.log(parsed[0].brand);

        for (i = 0; i < parsed.length; i++) {

            category = this.ifCity(parsed[i].category);
            date = this.ifCity(parsed[i].Date);
            brand = this.ifCity(parsed[i].brand);
            name = this.ifCity(parsed[i].Item);
            SKU = this.ifCity(parsed[i].SKU);
            retail = this.ifCity(parsed[i].Cost);
            shippingCost = this.ifCity(parsed[i].Shipping);
            color = this.ifCity(parsed[i].color);
            size = this.ifCity(parsed[i].Size);
            condition = this.ifCity(parsed[i].condition);
            notes = this.ifCity(parsed[i].notes);

            market = this.ifCity(parsed[i].Platform);
            orderNum = this.ifCity(parsed[i].orderNum);
            trackingNum = this.ifCity(parsed[i].trackingNum);
            saleDate = this.ifCity(parsed[i].saleDate);
            soldPrice = this.ifCity(parsed[i].SellingPrice);
            totalAfterFees = this.ifCity(parsed[i].TotalAfterFees);
            notes = this.ifCity(parsed[i].notes);


            final.push(this.formatter(category, date, brand, name, SKU, retail, shippingCost, color, size, condition, notes, market, orderNum, trackingNum, saleDate, soldPrice, totalAfterFees, notes, expenseName, expensePrice, expenseReason, expenseDateStart, expenseOccurance, expenseEnded, expenseNotes, customerId, pic, itemId, currentLowestAsk));
        }

        var tempdata = '[' + final.slice(0, parsed.length + 1) + ']';
        //fs.writeFileSync('testing.json', tempdata, 'utf8');
        var newdata = JSON.parse(tempdata);
        //console.log(newdata[2].inventory.name);

        return newdata;

    }

    csvConvStockX(csvFilePath) {
        var jsonObj = csvToJson.fieldDelimiter(',').getJsonFromCsv(csvFilePath);
        finaljson = [];

        for (var i = 0; i < jsonObj.length; i++) {

            if ((jsonObj[i].Item.length == 0) || jsonObj[i] == undefined) {
                // code to skip shit thats blank

            } else {
                finaljson.push(jsonObj[i]);
                //console.log(jsonObj[i])
            }

        }
        //console.log(finaljson[0].Item);
        return finaljson;
    }

    storeStringStockX(parsed) {
        var final = [];

        var category = '';
        var date = '';
        var brand = '';
        var name = '';
        var SKU = '';
        var retail = '';
        var shippingCost = '';
        var color = '';
        var size = '';
        var condition = 'new';
        var notes = '';

        var market = "StockX";
        var orderNum = "";
        var trackingNum = "";
        var saleDate = "";
        var soldPrice = "";
        var totalAfterFees = "";
        var notes = "";

        var expenseName = "";
        var expensePrice = "";
        var expenseReason = "";
        var expenseDateStart = "";
        var expenseOccurance = "";
        var expenseEnded = "";
        var expenseNotes = "";

        var customerId = "";
        var pic = "";
        var itemId = "";
        var currentLowestAsk = "";


        for (i = 0; i < parsed.length; i++) {

            //category = ifCity(parsed[i].category);
            date = this.ifCity(parsed[i]['"SaleDate"']);
            brand = this.ifCity(parsed[i].Item);
            name = this.ifCity(parsed[i]['"SkuName"']);
            SKU = this.ifCity(parsed[i].Style);
            retail = this.ifCity(parsed[i].Cost);
            shippingCost = this.ifCity(parsed[i].Shipping);
            color = this.ifCity(parsed[i].color);
            size = this.ifCity(parsed[i]['"SkuSize"']);
            //condition = ifCity(parsed[i].condition);
            notes = this.ifCity(parsed[i].notes);

            //market = ifCity(parsed[i].Platform);
            orderNum = this.ifCity(parsed[i]['"OrderNumber"']);
            trackingNum = this.ifCity(parsed[i].trackingNum);
            saleDate = this.ifCity(parsed[i]['"SaleDate"']);
            soldPrice = this.ifCity(parsed[i].Price);
            totalAfterFees = this.ifCity(parsed[i]['"FinalPayoutAmount"']);
            notes = this.ifCity(parsed[i].notes);

            final.push(this.formatter(category, date, brand, name, SKU, retail, shippingCost, color, size, condition, notes, market, orderNum, trackingNum, saleDate, soldPrice, totalAfterFees, notes, expenseName, expensePrice, expenseReason, expenseDateStart, expenseOccurance, expenseEnded, expenseNotes, customerId, pic, itemId, currentLowestAsk));
        }

        var tempdata = '[' + final.slice(0, parsed.length + 1) + ']';
        //fs.writeFileSync('testing.json', tempdata, 'utf8');
        var newdata = JSON.parse(tempdata);
        //console.log(newdata[2].inventory.name);

        return newdata;

    }

    //all amart functions will be deleted after we finish the sync function
    csvConvFC(csvFilePath) {
        var jsonObj = csvToJson.fieldDelimiter(',').getJsonFromCsv(csvFilePath);
        finaljson = [];

        for (var i = 0; i < jsonObj.length; i++) {
            finaljson.push(jsonObj[i]);
        }
        //console.log(finaljson[0].Item);
        return finaljson;
    }


    storeStringFCSale(parsed) {
        var final = [];

        var category = '';
        var date = '';
        var brand = '';
        var name = '';
        var SKU = '';
        var retail = '';
        var shippingCost = '';
        var color = '';
        var size = '';
        var condition = 'new';
        var notes = '';

        var market = "Flightclub";
        var orderNum = "";
        var trackingNum = "";
        var saleDate = "";
        var soldPrice = "";
        var totalAfterFees = "";
        var notes = "";

        var expenseName = "";
        var expensePrice = "";
        var expenseReason = "";
        var expenseDateStart = "";
        var expenseOccurance = "";
        var expenseEnded = "";
        var expenseNotes = "";

        var customerId = "";
        var pic = "";
        var itemId = "";
        var currentLowestAsk = "";


        for (i = 0; i < parsed.length; i++) {

            //category = ifCity(parsed[i].category);
            date = this.ifCity(parsed[i].DATEIN);
            brand = this.ifCity(parsed[i].MODEL);
            name = parsed[i].NAME;
            SKU = this.ifCity(parsed[i].STYLE);
            retail = this.ifCity(parsed[i].PURCHASEPRICE);
            //shippingCost = ifCity(parsed[i].Shipping);
            color = this.ifCity(parsed[i].COLORWAY);
            size = this.ifCity(parsed[i].SIZE);
            //condition = ifCity(parsed[i].condition);
            //notes = ifCity(parsed[i].notes);

            //market = ifCity(parsed[i].MARKET);
            orderNum = this.ifCity(parsed[i].ID);
            //trackingNum = ifCity(parsed[i].trackingNum);
            saleDate = this.ifCity(parsed[i].DATESOLD);
            soldPrice = this.ifCity(parsed[i].PRICE);
            totalAfterFees = this.ifCity(parsed[i].SELLERRETURN);
            notes = this.ifCity(parsed[i].LOCATION);

            final.push(this.formatter(category, date, brand, name, SKU, retail, shippingCost, color, size, condition, notes, market, orderNum, trackingNum, saleDate, soldPrice, totalAfterFees, notes, expenseName, expensePrice, expenseReason, expenseDateStart, expenseOccurance, expenseEnded, expenseNotes, customerId, pic, itemId, currentLowestAsk));
        }

        var tempdata = '[' + final.slice(0, parsed.length + 1) + ']';
        //fs.writeFileSync('testing.json', tempdata, 'utf8');
        var newdata = JSON.parse(tempdata);
        //console.log(newdata[2].inventory.name);

        return newdata;

    }

    storeStringFCinv(parsed) {
        var final = [];

        var category = 'LISTED,UNSOLD';
        var date = '';
        var brand = '';
        var name = '';
        var SKU = '';
        var retail = '';
        var shippingCost = '';
        var color = '';
        var size = '';
        var condition = 'new';
        var notes = '';

        var market = "Flightclub";
        var orderNum = "";
        var trackingNum = "";
        var saleDate = "PENDING";
        var soldPrice = "";
        var totalAfterFees = "";
        var notes = "";

        var expenseName = "";
        var expensePrice = "";
        var expenseReason = "";
        var expenseDateStart = "";
        var expenseOccurance = "";
        var expenseEnded = "";
        var expenseNotes = "";

        var customerId = "";
        var pic = "";
        var itemId = "";
        var currentLowestAsk = "";


        for (i = 0; i < parsed.length; i++) {

            //category = ifCity(parsed[i].category);
            date = this.ifCity(parsed[i].DATEIN);
            brand = this.ifCity(parsed[i].MODEL);
            name = parsed[i].NAME;
            SKU = this.ifCity(parsed[i].STYLE);
            retail = ifCity(parsed[i].PURCHASEPRICE);
            //shippingCost = ifCity(parsed[i].Shipping);
            color = this.ifCity(parsed[i].COLORWAY);
            size = this.ifCity(parsed[i].SIZE);
            //condition = ifCity(parsed[i].condition);
            //notes = ifCity(parsed[i].notes);

            //market = ifCity(parsed[i].MARKET);
            orderNum = this.ifCity(parsed[i].ID);
            //trackingNum = ifCity(parsed[i].trackingNum);
            //saleDate = ifCity(parsed[i].DATESOLD);
            soldPrice = this.ifCity(parsed[i].PRICE);
            totalAfterFees = this.ifCity(parsed[i].SELLERRETURN);
            notes = this.ifCity(parsed[i].LOCATION);

            final.push(this.formatter(category, date, brand, name, SKU, retail, shippingCost, color, size, condition, notes, market, orderNum, trackingNum, saleDate, soldPrice, totalAfterFees, notes, expenseName, expensePrice, expenseReason, expenseDateStart, expenseOccurance, expenseEnded, expenseNotes, customerId, pic, itemId, currentLowestAsk));
        }

        var tempdata = '[' + final.slice(0, parsed.length + 1) + ']';
        //fs.writeFileSync('testing.json', tempdata, 'utf8');
        var newdata = JSON.parse(tempdata);
        //console.log(newdata[2].inventory.name);

        return newdata;

    }

    csvConvSG(csvFilePath) {
        var jsonObj = csvToJson.fieldDelimiter(',').getJsonFromCsv(csvFilePath);
        finaljson = [];

        for (var i = 0; i < jsonObj.length; i++) {
            finaljson.push(jsonObj[i]);
        }
        //console.log(finaljson[0].Item);
        return finaljson;
    }

    storeStringSGSale(parsed) {
        var final = [];

        var category = '';
        var date = '';
        var brand = '';
        var name = '';
        var SKU = '';
        var retail = '';
        var shippingCost = '';
        var color = '';
        var size = '';
        var condition = 'new';
        var notes = '';

        var market = "Stadium Goods";
        var orderNum = "";
        var trackingNum = "";
        var saleDate = "";
        var soldPrice = "";
        var totalAfterFees = "";
        var notes = "";

        var expenseName = "";
        var expensePrice = "";
        var expenseReason = "";
        var expenseDateStart = "";
        var expenseOccurance = "";
        var expenseEnded = "";
        var expenseNotes = "";

        var customerId = "";
        var pic = "";
        var itemId = "";
        var currentLowestAsk = "";


        for (i = 0; i < parsed.length; i++) {

            category = this.ifCity(parsed[i].category);
            date = this.ifCity(parsed[i].IntakeDate);
            brand = this.ifCity(parsed[i].Product);
            name = parsed[i].ProductName;
            SKU = this.ifCity(parsed[i].ManufacturingItemNumber);
            retail = this.ifCity(parsed[i].PURCHASEPRICE);
            //shippingCost = ifCity(parsed[i].Shipping);
            color = this.ifCity(parsed[i].Colorway);
            size = this.ifCity(parsed[i].Size);
            //condition = ifCity(parsed[i].condition);
            notes = this.ifCity(parsed[i].SerialNumber);

            //market = ifCity(parsed[i].MARKET);
            orderNum = this.ifCity(parsed[i].ID);
            trackingNum = this.ifCity(parsed[i].ReceiptNumber);
            saleDate = this.ifCity(parsed[i].SoldDate);
            soldPrice = this.ifCity(parsed[i].OriginalPrice);
            totalAfterFees = this.ifCity(parsed[i].PayoutAmount);
            notes = this.ifCity(parsed[i].SalesDoc);

            final.push(this.formatter(category, date, brand, name, SKU, retail, shippingCost, color, size, condition, notes, market, orderNum, trackingNum, saleDate, soldPrice, totalAfterFees, notes, expenseName, expensePrice, expenseReason, expenseDateStart, expenseOccurance, expenseEnded, expenseNotes, customerId, pic, itemId, currentLowestAsk));
        }

        var tempdata = '[' + final.slice(0, parsed.length + 1) + ']';
        //fs.writeFileSync('testing.json', tempdata, 'utf8');
        var newdata = JSON.parse(tempdata);
        //console.log(newdata[2].inventory.name);

        return newdata;

    }

    storeStringSGinv(parsed) {
        var final = [];

        var category = 'LISTED,UNSOLD';
        var date = '';
        var brand = '';
        var name = '';
        var SKU = '';
        var retail = '';
        var shippingCost = '';
        var color = '';
        var size = '';
        var condition = 'new';
        var notes = '';

        var market = "Stadium Goods";
        var orderNum = "";
        var trackingNum = "";
        var saleDate = "PENDING";
        var soldPrice = "";
        var totalAfterFees = "";
        var notes = "";

        var expenseName = "";
        var expensePrice = "";
        var expenseReason = "";
        var expenseDateStart = "";
        var expenseOccurance = "";
        var expenseEnded = "";
        var expenseNotes = "";

        var customerId = "";
        var pic = "";
        var itemId = "";
        var currentLowestAsk = "";


        for (i = 0; i < parsed.length; i++) {

            //category = ifCity(parsed[i].category);
            date = this.ifCity(parsed[i].IntakeDate);
            brand = this.ifCity(parsed[i].Product);
            name = parsed[i].ProductName;
            SKU = this.ifCity(parsed[i].ManufacturingItemNumber);
            //retail = ifCity(parsed[i].PURCHASEPRICE);
            //shippingCost = ifCity(parsed[i].Shipping);
            color = this.ifCity(parsed[i].Colorway);
            size = this.ifCity(parsed[i].Size);
            //condition = ifCity(parsed[i].condition);
            notes = this.ifCity(parsed[i].SerialNumber);

            //market = ifCity(parsed[i].MARKET);
            orderNum = this.ifCity(parsed[i].ID);
            trackingNum = this.ifCity(parsed[i].ReceiptNumber);
            //saleDate = ifCity(parsed[i].SoldDate);
            soldPrice = this.ifCity(parsed[i].OriginalPrice);
            totalAfterFees = this.ifCity(parsed[i].PayoutAmount);
            notes = this.ifCity(parsed[i].SalesDoc);

            final.push(this.formatter(category, date, brand, name, SKU, retail, shippingCost, color, size, condition, notes, market, orderNum, trackingNum, saleDate, soldPrice, totalAfterFees, notes, expenseName, expensePrice, expenseReason, expenseDateStart, expenseOccurance, expenseEnded, expenseNotes, customerId, pic, itemId, currentLowestAsk));
        }

        var tempdata = '[' + final.slice(0, parsed.length + 1) + ']';
        //fs.writeFileSync('testing.json', tempdata, 'utf8');
        var newdata = JSON.parse(tempdata);
        //console.log(newdata[2].inventory.name);

        return newdata;

    }

    ifCity(verify) {
        var final = '';

        if (verify != null && verify.length != 0) {
            final = verify.toString();
        }
        if (verify != null && isNaN(verify) != true) {
            final = verify.toString();
        }
        if (verify != null && final.indexOf('$') != -1) {
            final = verify.replace(/\$/g, '');
        }
        if (verify != null && final.includes('"')) {
            final = final.substring(1, final.lastIndexOf('"'));
        } else if (verify != null && final.includes("'")) {
            final = final.substring(1, final.lastIndexOf("'"));
        }

        return final;
    }



    formatter(category, date, brand, name, SKU, retail, shippingCost, color, size, condition, notes, market, orderNum, trackingNum, saleDate, soldPrice, totalAfterFees, notes, expenseName, expensePrice, expenseReason, expenseDateStart, expenseOccurance, expenseEnded, expenseNotes, customerId, pic, itemId, currentLowestAsk) {
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
            expenseName: expenseName,
            expensePrice: expensePrice,
            expenseReason: expenseReason,
            expenseDateStart: expenseDateStart,
            expenseOccurance: expenseOccurance,
            expenseEnded: expenseEnded,
            expenseNotes: expenseNotes
        }
        var cside = {
            customerId: customerId,
            pic: pic,
            itemId: itemId,
            currentLowestAsk: currentLowestAsk,
        }
        var jso = {
            inventory: inventory,
            sale: sale,
            expense: expense,
            cside: cside
        }
        return (JSON.stringify({
            jso
        }, null, 2).slice(10, (JSON.stringify({
            jso
        }, null, 2).length - 1)));
    }

    writeFile(newdata, path) {
        //make a different write file function
        //that makes sure you dont add duplicate sales
        //and orders the dates

        final = [];

        if (fs.existsSync(path)) {
            var currdata = fs.readFileSync(path);
            var cparsed = JSON.parse(currdata);
            var first = JSON.stringify(cparsed);
            var temp = first.slice(0, -1);
            var second = JSON.stringify(newdata);
            var temp2 = second.slice(1);

            final.push(temp);
            final.push(temp2);

            final = this.cleanup(final);
            //test = JSON.stringify(test);

            fs.writeFileSync('bigbasicNEW.json', final, 'utf8');




            return final;
        } else {
            fs.writeFileSync('NEWbigbasic.json', JSON.stringify(newdata), 'utf8');
            console.log('else');
            return JSON.stringify(newdata);
        }

    }

    cleanup(newdata) {

        var newfinal = [];
        var parsed = JSON.parse(newdata);

        for (i = 0; i < parsed.length; i++) {
            parsed[i].inventory.retail = this.ifCity(parsed[i].inventory.retail);
            parsed[i].inventory.size = this.ifCity(parsed[i].inventory.size);
            parsed[i].inventory.SKU = this.ifCity(parsed[i].inventory.SKU);
            parsed[i].sale.soldPrice = this.ifCity(parsed[i].sale.soldPrice);
            parsed[i].sale.totalAfterFees = this.ifCity(parsed[i].sale.totalAfterFees);

        }

        //INSERT A FOR EACH LOOP TO REMOVE ALL DUPLICATES > SEARCHING BY SALE.ORDERNUM

        var push = parsed;


        push = JSON.stringify(push);
        push = push.slice(1);
        push = push.slice(0, -1);
        //push = JSON.parse(push);
        newfinal.push(push);


        return ('[' + newfinal + ']');
    }
}