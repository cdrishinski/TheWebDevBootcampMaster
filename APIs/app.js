const request = require('request');
const axios = require('axios');

console.log('my api call get me...')
// axios.get()


request('https://jsonplaceholder.typicode.com/users/', function (error, response, body) {
   // eval(require('locus'))
    if(!error && response.statusCode == 200) {
        const parsedData = JSON.parse(body)
        console.log(parsedData[0].name, parsedData[1].name, parsedData[2].name)

    }

});

