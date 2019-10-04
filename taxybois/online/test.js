let sales = require('../offline/bigbasicNEW.json');
const Stockx = require('./Stockx');
let myStockx = new Stockx();

start();

async function start() {
    for (let sale of sales) {
        if (sale.inventory.retail != '') {
            await myStockx.search(sale.inventory.name).then(results => {
                try {
                    console.log(results[0].name + ' -- $' + results[0].highest_bid);
                } catch (error) {
                    console.log(sale.inventory.name + ' -- NO VALUE FOUND BRUH');
                }
            });
            console.log('');
        }
    }
}

// //Example of using the Stockx class
// const Stockx = require('./Stockx.js');
// let stockxOof = new Stockx();
// stockxOof.authenticate('Aaryan.gupta158@gmail.com', 'NigerianPrince1!')
//     .then(async () => {
//         console.log(await stockxOof.search('Nike'));
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// //Example of using the Goat class
// const Goat = require('./Goat.js');
// let goatOof = new Goat();
// goatOof.authenticate('brendan4t@gmail.com', 'FuckYouNigger')
//     .then(async () => {
//         console.log(await goatOof.getSalesPage(1));
//     })
//     .catch((error) => {
//         console.log(error);
//     });