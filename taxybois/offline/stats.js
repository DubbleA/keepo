



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
    
    


}



//cant call funtion inside own class without putting this. before it
//ADD CAPTCHA SUPPORT IN CASE ONE POPS UP