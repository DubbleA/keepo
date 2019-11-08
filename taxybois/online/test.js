let sales = require('../offline/bigbasicNEW.json');
const Stockx = require('./Stockx');
let myStockx = new Stockx();

const fs = require('fs');

start();
fs.writeFile('./bruh.json', JSON.stringify(sales), (err) => {
    if (err) console.log(err);
});

async function start() {
    let keys = Object.keys(sales);
    for (let i = 0; i < keys.length; i++) {
        if (sales[keys[i]].inventory.retail != '') {
            await myStockx.search(sales[keys[i]].inventory.name).then(results => {
                try {
                    sales[keys[i]].inventory.retail = results[0]['searchable_traits']['Retail Price'];
                } catch (error) {
                    //
                }
            });
        }
        console.log(sales[keys[i]].inventory.retail)
    }
    fs.writeFile('./bruh.json', JSON.stringify(sales), (err) => {
        if (err) console.log(err);
    });
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