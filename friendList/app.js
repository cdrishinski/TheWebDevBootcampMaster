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
//     dob: '1988-11-23',
//     image: 'https://images.unsplash.com/photo-1563178406-4cdc2923acbc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
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
app.get('/friends/new', (req, res)=>{
    res.render('new')
})

//NEW ROUTE
//SHOW ROUTE
//EDIT ROUTE
//UPDATE ROUTE
//DELTE ROUTE


const port = process.env.PORT || 3000;
 app.listen(port, () => {
    console.log(`The friend site is up on port ${port}`)
    })