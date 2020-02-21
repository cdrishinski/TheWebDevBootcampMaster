const express = require('express');
const app = express();

//home route
app.get('/', (req, res) => res.send('Hey there welcome to my assignment'))

//animal route
app.get('/speak/:animal', (req, res) => {
    console.log(req.params)
    let animal = req.params.animal.toLowerCase()
    let noises = {
        pig: 'Oink',
        cow: 'Moo',
        dog: 'Woof woof!'
    };
    let noise = noises[animal]

    res.send(`Hey there welcome to my SPEAK page The ${animal} says "${noise}"`)
    //res.send(`The ${req.params.animal} says ${noise}`)
})

//repat route
app.get('/repeat/:word/:times', (req, res) =>{
    console.log(req.params);
    const word = req.params.word.toLowerCase();
    const times = Number(req.params.times)
    let string = "";
    console.log(word);
    console.log(times);

    for(var i = 0; i < times; i++){
        string += word + " "
    }
    
    res.send(`Hey there welcome to my REPEAT page.  ${string}`)
})

// * catchall route
app.get('*', (req, res) => res.send('Sorry, page not found...what are you doing with your life'))


var port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log("Server Has Started on Port 3000!");
});