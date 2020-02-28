// General search: http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb 

// Search with Movie ID: http://www.omdbapi.com/?i=tt3896198&apikey=thewdb 

const express = require('express')
const app = express()
const axios = require('axios')


app.use(express.static('public'));

app.set('view engine', 'ejs');

//results route
app.get('/', (req, res)=>{
    res.render('home')
})

//search route


const port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log("Server Has Started on Port 3000!");
});