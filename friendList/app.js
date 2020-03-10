const   express = require('express'),
        app = express(),
        bodyParser = require('body-parser'),
        mongoose = require('mongoose'),
        methodOverride = require('method-override');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost/friend_list');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs')

const friendSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    nickName:{type: String, default: 'None'},
    dob: Date,
    image: String,
    bestFriend: {type: Boolean, default: false},
    created: {type: Date, default: Date.now}

})

const Friend = new mongoose.model('Friend', friendSchema)

// Friend.create({
//     firstName: 'Allyson',
//     lastName: 'Drishinski',
//     nickName: 'Ally',
//     dob: 11/23/1988,
//     image: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/14102608_10154021085284302_8890473236313838870_n.jpg?_nc_cat=108&_nc_sid=85a577&_nc_ohc=bmLA5wmpPHMAX_I2f0R&_nc_ht=scontent-lax3-1.xx&oh=c78dd5b9f9845bb2bf6f421487aa7527&oe=5EA66ABB',
//     bestFriend: true
// })

//HOME PAGE
app.get('/', (req, res)=>{
    res.render('home')
})

//INDEX ROUTE
app.get('/friends', (req, res)=>{
    Friend.find({}, (err, allFriends)=>{
        if(err){
            console.log(err)
        } else{
            res.render('index', {friends: allFriends})
        }
    })
})
//CREATE ROUTE
//NEW ROUTE
//SHOW ROUTE
//EDIT ROUTE
//UPDATE ROUTE
//DELTE ROUTE


const port = process.env.PORT || 3000;
 app.listen(port, () => {
    console.log(`The friend site is up on port ${port}`)
    })