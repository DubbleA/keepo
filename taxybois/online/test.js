const Stockx = require('./Stockx.js');
let oof = new Stockx();
oof.authenticate('Aaryan.gupta158@gmail.com', 'NigerianPrince1!')
    .then(() => {
        oof.getSale(1);
    }).catch(error => {
        console.log('lmao i fucked up big time');
    });
