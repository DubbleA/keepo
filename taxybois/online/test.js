const Stockx = require('./Stockx.js');
let oof = new Stockx()
oof.authenticate('Aaryan.gupta158@gmail.com', 'NigerianPrince1!')
    .then(async () => {
        let results = await oof.search('nike');
        console.log(results);
    })
    .catch(error => {
        console.log('lmao i fucked up big time');
    });
