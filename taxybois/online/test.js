const Stockx = require('./Stockx.js');
let oof = new Stockx();
oof.authenticate('Aaryan.gupta158@gmail.com', 'NigerianPrince1!')
    .then(async () => {
        console.log((await oof.getAllSales()));
    })
    .catch(error => {
        console.log('lmao i fucked up big time');
    });