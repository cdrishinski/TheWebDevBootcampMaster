// General search: http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb 

// Search with Movie ID: http://www.omdbapi.com/?i=tt3896198&apikey=thewdb 

const express = require('express')
const app = express()
const axios = require('axios')


app.use(express.static('public'));

app.set('view engine', 'ejs');

//search route
app.get('/', (req, res) =>{
    res.render('search')
})

//results route
app.get('/results', (req, res)=>{
    //console.log(req.query.search)
    const query = req.query.search
    const api = `http://www.omdbapi.com/?s=${query}&apikey=thewdb`
    axios({
        method: 'get',
        url: api,
        responseType: 'json'
      })
        .then((body) => {
            const response = body.data.Search
            //console.log(response)
            res.render('results', {response: response})
        });

})



const port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log("Server Has Started on Port 3000!");
});