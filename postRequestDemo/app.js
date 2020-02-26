const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine', 'ejs');

app.get('/', (req, res) =>{
    res.render('home')
})

//post route to send new data to be added
app.post('/addfriend', (req, res) => {
    console.log(req.body)
    res.send('you have reach the post route')
})

// /friends
app.get('/friends', (req, res) => {
    let friends = ['Pete', 'Nick', 'Will', 'Wes', 'Mike']
    res.render('friends', {friends: friends})
})




const port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log("Server Has Started on Port 3000!");
});