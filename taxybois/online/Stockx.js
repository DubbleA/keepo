const rp = require('request-promise');
let cookieJar = rp.jar();

module.exports = class Stockx {
    //fucking does nothing lmao
    constructor() {}

    //returns nothing
    authenticate(username, password) {
		return new Promise((resolve, reject) => {
            let options = {
                url : 'https://stockx.com/api/login',
                method: 'POST',
                headers: {
                    'host': 'stockx.com',
                    'connection': 'keep-alive',
                    'upgrade-insecure-requests': 1,
                    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36',
                    'Accept-Encoding': 'gzip, deflate',
                    'Accept-Language': 'en-US,en;q=0.9,',
                },
                body: {
                    'email': username,
                    'password': password
                },
                resolveWithFullResponse : true,
                json: true,
                gzip: true,
                jar: cookieJar
            }

            rp(options)
                .then((response) => {
                    this.jwtToken = response.headers['jwt-authorization'];
                    this.customerId = response.body.Customer.id;
                    resolve();
                })
                .catch((error) => {
                    console.log(error);
                    reject();
                });
        });
    }

	//returns array of items
	async getAllSales() {
        //just a warning incase someone fucks up
        if (!this.customerId) {
            console.warn('Please wait for setup to finish before calling this function');
            return;
        }        
		let sales = [];
		//one line baybeeeee
		try { for (let i = 1;; sales = sales.concat(await this.getSalePage(i++))) {} } catch (error) { return sales; }
	}

    //returns array of items
    getSalePage(page) {
        //just a warning incase someone fucks up
        if (!this.customerId) {
            console.warn('Please wait for setup to finish before calling this function');
            return;
        }
        return new Promise((resolve, reject) => {
            let options = {
                url : `https://stockx.com/api/customers/${this.customerId}/selling/history`,
                method: 'GET',
                headers: {
                    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36',
                    'jwt-authorization': this.jwtToken
                },
                qs: {
                    sort: 'matched_with_date',
                    order: 'DESC',
                    limit: '100',
                    page: page,
                    currency: 'USD'
                },
                resolveWithFullResponse : true,
                json: true,
                jar: cookieJar
            }

            rp(options)
                .then((response) => {
                    //throws rejection if theres no items on that page
                    response.body.Pagination.total ? resolve(response.body.PortfolioItems) : reject();
                })
                .catch((error) => {
                    console.log(error);
                    reject();
            });
        });
    }

    //returns array of items
    search(searchTerm) {
        return new Promise((resolve, reject) => {
            let options = {
                url : 'https://xw7sbct9v6-2.algolianet.com/1/indexes/products/query',
                method: 'POST',
                qs: {
                    'x-algolia-agent': 'Algolia for vanilla JavaScript 3.32.1',
                    'x-algolia-application-id': 'XW7SBCT9V6',
                    'x-algolia-api-key': '6bfb5abee4dcd8cea8f0ca1ca085c2b3'
                },
                body: {
                    params: `query=${encodeURIComponent(searchTerm)}&facets=*&filters=`,
                },
                resolveWithFullResponse : true,
                json: true,
            }

            rp(options)
                .then((response) => {
                    resolve(response.body.hits);
                })
                .catch((error) => {
                    console.log(error);
                    reject();
            });
        });
    }
}
