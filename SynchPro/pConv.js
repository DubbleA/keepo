const csvToJson = require('convert-csv-to-json');
const fs = require('fs');


module.exports = class pConv {

    constructor() {}
    
    csvConv(csvFilePath) {
        var jsonObj = csvToJson.fieldDelimiter(',').getJsonFromCsv(csvFilePath);
        var finaljson = [];

        for (let i = 0; i < jsonObj.length; i++) {

            if (!(jsonObj[i] == undefined)) {

                finaljson.push(jsonObj[i]);

            }

        }

        return finaljson;
    }

    ifCity(verify){
        var final = verify;
        return final;
    }

    formatter(id, billSame, email, cardName, cardNum, cardExp, cvv, oneUse, shippingFirstName, shippingLastName, shippingAddress, shippingAddress2, shippingCity, shippingState, shippingZip, shippingCountry, shippingPhone, billingFirstName, billingLastName, billingAddress, billingAddress2, billingCity, billingState, billingZip, billingCountry, billingPhone){
        var profile = {
            id: id,
            billSame: billSame,
            email: email,
            cardName: cardName,
            cardNum: cardNum,
            cardExp: cardExp,
            cvv: cvv,
            oneUse: oneUse
        }
        var shipping = {
            shippingFirstName: shippingFirstName,
            shippingLastName: shippingLastName,
            shippingAddress: shippingAddress,
            shippingAddress2: shippingAddress2,
            shippingCity: shippingCity,
            shippingState: shippingState,
            shippingZip: shippingZip,
            shippingCountry: shippingCountry,
            shippingPhone: shippingPhone
        }
        var billing = {
            billingFirstName: billingFirstName,
            billingLastName: billingLastName,
            billingAddress: billingAddress,
            billingAddress2: billingAddress2,
            billingCity: billingCity,
            billingState: billingState,
            billingZip: billingZip,
            billingCountry: billingCountry,
            billingPhone: billingPhone
        }
        var jso = {
            profile: profile,
            shipping: shipping,
            billing: billing,
        }
        return (JSON.stringify({
            jso
        }, null, 2).slice(10, (JSON.stringify({
            jso
        }, null, 2).length - 1)));
    }

    syncToString(parsed){
        var final = [];



        for (let i = 0; i < parsed.length; i++) {


            final.push(this.formatter(this.ifCity(parsed[i].ProfileName), this.ifCity(parsed[i]['BillingSameAsShipping?(y/n)']), this.ifCity(parsed[i].Email), this.ifCity(parsed[i].CardholderName), this.ifCity(parsed[i]['CardNumber(NoSpaces)']), this.ifCity(parsed[i]['CardExpiration(ex:01/20)']), this.ifCity(parsed[i].CardCVV), this.ifCity(parsed[i]['OneUse?(y/n)']), this.ifCity(parsed[i].ShippingFirstName), this.ifCity(parsed[i].ShippingLastName), this.ifCity(parsed[i].ShippingAddressLine1), this.ifCity(parsed[i].ShippingAddressLine2), this.ifCity(parsed[i].ShippingCity), this.ifCity(parsed[i]['ShippingState(Abbreviation)']), this.ifCity(parsed[i].ShippingZip), this.ifCity(parsed[i].ShippingCountry), this.ifCity(parsed[i]['ShippingPhoneNumber(NumbersOnlyNoSpaces)']), this.ifCity(parsed[i].BillingFirstName), this.ifCity(parsed[i].BillingLastName), this.ifCity(parsed[i].BillingAddressLine1), this.ifCity(parsed[i].BillingAddressLine2), this.ifCity(parsed[i].BillingCity), this.ifCity(parsed[i]['BillingState(Abbreviation)']), this.ifCity(parsed[i].BillingZip), this.ifCity(parsed[i].BillingCountry), this.ifCity(parsed[i]['BillingPhoneNumber(NumbersOnlyNoSpaces)'])));
        }
        var tempdata = '[' + final.slice(0, parsed.length + 1) + ']';

        var newdata = JSON.parse(tempdata);

        return newdata;

    }

}