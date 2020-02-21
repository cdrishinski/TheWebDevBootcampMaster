const express = require('express');
const app = express();

app.get('/', (req, res) => {
   // res.send('<h1>hey its working!</h1>')
    res.render('home.ejs')
})

app.get('/fallinlovewith/:thing', (req, res) => {
    const thing = req.params.thing
    res.render('love.ejs', {thingVar: thing})
})

const port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log("Server Has Started on Port 3000!");
});