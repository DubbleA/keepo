



// function main (){
    
//     var rawdata = fs.readFileSync('largebasicNEW.json');
//     var parsed = JSON.parse(rawdata);
//     console.log(total(parsed));

// }

module.exports = class Stats {
    constructor() {}
    taf(parsed) {
        
        var taf = 0;
        
        var i = 0;
        for(i = 0; i < parsed.length; i++){
            
            taf = taf + Number(parsed[i].sale.totalAfterFees);
            
        }
        
        return taf;
    }

    totalSoldPrice(parsed) {
        var rev = 0;
        
        
        
        for(let i = 0; i < parsed.length; i++){
            rev = rev + Number(parsed[i].sale.soldPrice);
            
        }
        
        return rev;
    }
    
    totalSalesNum(parsed){
        var counter = 0;
        for(let i = 0; i < parsed.length; i++){
            counter++;
        }

        return counter;
    }

    ROI(parsed){
        var soldPrice = 0;
        var retail = 0;
        

        for(let i = 0; i < parsed.length; i++){
            if(parsed[i].inventory.category != "LISTED,UNSOLD"){
                soldPrice = soldPrice + Number(parsed[i].sale.soldPrice);
                retail = retail + Number(parsed[i].inventory.retail);
            }
            
        }

        var ROI = (soldPrice - retail) / retail;

        return ROI;
    }
    
    inventory(parsed){
        var inventory = 0;
        for(let i = 0; i < parsed.length; i++){
            if(parsed[i].inventory.category == "LISTED,UNSOLD"){
                inventory = inventory + Number(parsed[i].inventory.retail);
            }
            
        }

        return inventory;
    }


}



//cant call funtion inside own class without putting this. before it
//ADD CAPTCHA SUPPORT IN CASE ONE POPS UP