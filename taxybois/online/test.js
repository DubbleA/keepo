//Example of using the Stockx class
const Stockx = require('./Stockx.js');
let stockxOof = new Stockx();
stockxOof.authenticate('Aaryan.gupta158@gmail.com', 'NigerianPrince1!')
    .then(async () => {
        console.log(await stockxOof.getAllSales());
    })
    .catch((error) => {
        console.log(error);
    });

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