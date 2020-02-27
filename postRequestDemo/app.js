const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine', 'ejs');

let friends = ['Pete', 'Nick', 'Will', 'Wes', 'Mike']

app.get('/', (req, res) =>{
    res.render('home')
})

//post route to send new data to be added
app.post('/addfriend', (req, res) => {
    let newFriend = req.body.newfriend
    friends.push(newFriend)
    res.redirect('friends')
})

// /friends
app.get('/friends', (req, res) => {
    res.render('friends', {friends: friends})
})




const port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log("Server Has Started on Port 3000!");
});