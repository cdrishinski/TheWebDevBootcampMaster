const request = require('request')
var rp = require('request-promise');;
const axios = require('axios');

console.log('my api call get me...')
// axios.get()

axios({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/users/1',
    responseType: 'json'
  })
    .then(function (response) {
      console.log(response.data.name)
    });

// rp('https://jsonplaceholder.typicode.com/users/')
//     .then((body)=>{
//         const parsedData = JSON.parse(body)
//         console.log(parsedData[0])
//     })
//     .catch((err) =>{
//         console.log('Error!', err)
//     })

 
