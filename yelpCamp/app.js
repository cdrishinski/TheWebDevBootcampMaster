const express = require('express'),
      app = express(),
      axios = require('axios');

app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
    res.send('hello everyone')
})

const port = process.env.PORT || 3000;

app.listen(port,() =>{
    console.log(`The YelpCamp server has started on port ${port}`)
})