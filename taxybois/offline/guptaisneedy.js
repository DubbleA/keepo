let mysales = require('./bigbasicNEW');

let soldRetails = [],
    unsoldRetails = [],
    soldPrices = [],
    afterFees = [];

mysales.forEach(sale => {
    if (sale.sale.soldPrice == '' || sale.inventory.category == 'LISTED,UNSOLD') {
        soldRetails.push(sale.inventory.retail);
        soldPrices.push(parseFloat(sale.sale.soldPrice));
        afterFees.push(parseFloat(sale.sale.totalAfterFees));
    } else {
        unsoldRetails.push(sale.inventory.retail);
    }

});

function total(arr) {
    return arr.reduce((a, b) => a + b, 0);
}

console.log('Retails (Sold): $' + total(soldRetails));
console.log('Inventory (Unsold): $' + total(unsoldRetails));
console.log('Avg. ROI (Sold): %' + 100 * total(soldPrices) / total(soldRetails));
console.log('Avg. ROI (Total After Fees): %' + 100 * total(afterFees) / total(soldRetails));