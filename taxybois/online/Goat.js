const rp = require('request-promise');
let cookieJar = rp.jar();

module.exports = class Goat {
    //fucking does nothing lmao
    constructor() {}

    //returns nothing
    authenticate(username, password) {
        return new Promise((resolve, reject) => {
            let options = {
                url: 'https://www.goat.com/api/v1/users/sign_in',
                method: 'POST',
                headers: {
                  'User-Agent': 'GOAT/2.17.0 (iPhone; iOS 11.3; Scale/3.00) Locale/en',
                  'content-type': 'application/x-www-form-urlencoded'
                },
                formData: {
                  'user[login]': username,
                  'user[password]': password
                },
                resolveWithFullResponse : true,
                json: true,
                jar: cookieJar
            }
            
            rp(options)
                .then((response) => {
                    this.authToken = response.body.authToken;
                    resolve();
                })
                .catch((error) => {
                    console.log(error);
                    reject();
                });
        });
    }

    //returns array of items - need to finish
    async getAllSales() {
        //just a warning incase someone fucks up
        if (!this.authToken) {
            console.warn('Please wait for setup to finish before calling this function');
            return;
        }
        let sales = [];
		//one line baybeeeee
		try { for (let i = 1;; sales = sales.concat(await this.getSalePage(i++))) {} } catch (error) { return sales; }
    }

    //returns array of items
    getSalesPage(page) {
        //just a warning incase someone fucks up
        if (!this.authToken) {
            console.warn('Please wait for setup to finish before calling this function');
            return;
        }
        return new Promise((resolve, reject) => {
            let options = {
                url: 'https://www.goat.com/api/v1/orders',
                method: 'GET',
                qs: {
                    filter: 'sell',
                    page: page
                },
                headers: {
                    Authorization: `Token token="${this.authToken}"`,
                    'User-Agent': 'GOAT/2.17.0 (iPhone; iOS 11.3; Scale/3.00) Locale/en'
                },
                resolveWithFullResponse : true,
                json: true,
                jar: cookieJar
            }

            rp(options)
                .then((response) => {
                    page > response.body.metadata.totalPages ? reject() : resolve(response.body.orders);
                })
                .catch((error) => {
                    console.log(error);
                    reject();
                })
        });
    }
}
