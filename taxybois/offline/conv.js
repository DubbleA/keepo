const csvToJson = require('convert-csv-to-json');
const fs = require('fs');

module.exports = class fConv {
constructor() {}

csvConv(csvFilePath) {
    var jsonObj = csvToJson.fieldDelimiter(',').getJsonFromCsv(csvFilePath);
    var finaljson = [];

    for (var i = 0; i < jsonObj.length; i++) {

        if (!(jsonObj[i] == undefined) && !(jsonObj[i].hasOwnProperty('Date')) && !(jsonObj[i].hasOwnProperty('Item'))) {
            
            finaljson.push(jsonObj[i]);

        }
        else if ((jsonObj[i].hasOwnProperty('Date')) && (jsonObj[i].hasOwnProperty('Item')) && !(jsonObj[i].Item.length == 0) && !(jsonObj[i].Date.includes('Totals:'))) {
            finaljson.push(jsonObj[i]);
        }

    }
    
    return finaljson;
}

storeString(parsed, vendor, listed){
    let final = [];
    //swift, stockX, FC Sale/inv, SG sale/inv
    parsed.forEach(parse => {
        console.log(listed)
        let category =  this.ifCity(parse.category || parse.CATEGORY) || listed || '',
        date = this.ifCity(parse.Date || parse['"SaleDate"'] || parse.DATEIN || parse.IntakeDate) || '',
        brand = this.ifCity(parse.brand || parse.Item || parse.MODEL || parse.Product) || '',
        name = this.ifCity(parse.Item || parse['"SkuName"'] || parse.NAME || parse.ProductName) || '',
        SKU = this.ifCity(parse.SKU || parse.Style || parse.STYLE || parse.ManufacturingItemNumber) || '',
        retail = this.ifCity(parse.Cost || parse.PURCHASEPRICE) || '',
        shippingCost = this.ifCity(parse.Shipping) || '',
        color = this.ifCity(parse.color || parse.COLORWAY || parse.Colorway) || '',
        size = this.ifCity(parse.Size || parse['"SkuSize"'] || parse.SIZE) || '',
        condition = this.ifCity(parse.condition) || '',
        invNotes = this.ifCity(parse.notes || parse.SerialNumber) || '',
        market =  this.ifCity(parse.Platform) || vendor || "",
        orderNum = this.ifCity(parse.orderNum || parse['"OrderNumber"'] || parse.ID) || "",
        trackingNum = this.ifCity(parse.trackingNum || parse.ReceiptNumber) || "",
        saleDate =  this.ifCity(parse.saleDate || parse['"SaleDate"'] || parse.DATESOLD || parse.SoldDate) || listed || "",
        soldPrice = this.ifCity(parse.SellingPrice || parse.Price || parse.PRICE || parse.OriginalPrice) || "",
        totalAfterFees = this.ifCity(parse.TotalAfterFees || parse['"FinalPayoutAmount"'] || parse.SELLERRETURN || parse.PayoutAmount) || "",
        saleNotes = this.ifCity(parse.notes || parse.LOCATION || parse.SalesDoc) || "",
        expenseName = "",
        expensePrice = "",
        expenseReason = "",
        expenseDateStart = "", 
        expenseOccurance = "",
        expenseEnded = "",
        expenseNotes = "",
        customerId = "",
        pic = "",
        itemId = "",
        currentLowestAsk = "";

        final.push(this.formatter(category, date, brand, name, SKU, retail, shippingCost, color, size, condition, invNotes, market, orderNum, trackingNum, saleDate, soldPrice, totalAfterFees, saleNotes, expenseName, expensePrice, expenseReason, expenseDateStart, expenseOccurance, expenseEnded, expenseNotes, customerId, pic, itemId, currentLowestAsk));

    });

    var tempdata = '[' + final.slice(0, parsed.length + 1) + ']';

    return JSON.parse(tempdata);
}

ifCity(verify) {
    var final = '';

    if(verify != null) {
        if (verify.length != 0) {
            final = verify.toString();
        }
        if (isNaN(verify) != true) {
            final = verify.toString();
        }
        if (final.indexOf('$') != -1) {
            final = verify.replace(/\$/g, '');
        }
        if (final.includes('"')) {
            final = final.substring(1, final.lastIndexOf('"'));
        } else if (final.includes("'")) {
            final = final.substring(1, final.lastIndexOf("'"));
        }
    } 

    return final;
}

formatter(category, date, brand, name, SKU, retail, shippingCost, color, size, condition, invNotes, market, orderNum, trackingNum, saleDate, soldPrice, totalAfterFees, saleNotes, expenseName, expensePrice, expenseReason, expenseDateStart, expenseOccurance, expenseEnded, expenseNotes, customerId, pic, itemId, currentLowestAsk) {
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
        invNotes: invNotes
    }
    var sale = {
        market: market,
        orderNum: orderNum,
        trackingNum: trackingNum,
        saleDate: saleDate,
        soldPrice: soldPrice,
        totalAfterFees: totalAfterFees,
        saleNotes: saleNotes
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



}