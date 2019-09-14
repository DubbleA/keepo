const rp = require('request-promise');
var cookieJar = rp.jar();

module.exports = class Stockx {
  constructor(username, password) {
    this.asyncConstructor(username, password);
  }

  async asyncConstructor(username, password) {
    await this.authenticate(username, password);
    await this.getSales();
  }

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

  getSales() {
    return new Promise((resolve, reject) => {
      let page = 1;
      {
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
            var resp = response.body.PortfolioItems[0];
            console.log(resp)
            // if (!response.body.Pagination.total) {
            //   resolve();
            // }
            // page++;
            resolve();
          })
          .catch((error) => {
            console.log(error);
            reject();
          });
      }
    });
  }
}
