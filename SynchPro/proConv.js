const csvToJson = require('convert-csv-to-json');
const fs = require('fs');


module.exports = class proConv {

    constructor() {}
    
    csvConvSynch(csvFilePath) {
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

}