const { XMLHttpRequest } = require('xmlhttprequest');
let xhttp = new XMLHttpRequest();

function get() {
    return new Promise((resolve, reject) => {
        xhttp.open('GET', 'https://synchronous-eba01.firebaseio.com/users.json');
        xhttp.onload = () => {
            resolve(JSON.parse(xhttp.responseText))
        }
        xhttp.send();
    });
}

function newUser(username, password) {
    return new Promise((resolve, reject) => {
        xhttp.open('PUT', `https://synchronous-eba01.firebaseio.com/users/${username}.json`);
        xhttp.onload = () => {
            resolve(JSON.parse(xhttp.responseText))
        }
        xhttp.send(`{"password": "${password}"}`);
    });
}

async function start() {
    newUser('admin', 'admin')
}

start();