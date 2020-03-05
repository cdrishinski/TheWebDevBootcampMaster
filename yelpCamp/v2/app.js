const express   = require('express'),
      app       = express(),
      axios     = require('axios'),
      bodyParser = require('body-parser'),
      mongoose  = require('mongoose');


mongoose.connect('mongodb://localhost/yelp_camp');     
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs')


//SCHEMA SETUP

const campgroundSchema = new mongoose.Schema({
    name: String,
    image: String
});

const Campground = mongoose.model('Campground', campgroundSchema);

Campground.create(
    {
        name: 'soldier hollow', 
        image: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    }, (err, campground)=>{
        if(err){
            console.log('somethings wrong', err)
        } else (
            console.log('it worked', campground)
        )
    })


app.get('/', (req, res)=>{
    res.render('landing')
})
app.get('/campgrounds', (req, res)=>{
    res.render('campgrounds', {campgrounds: campgrounds})
})
app.post('/campgrounds', (req, res)=> {
    console.log(req.body)
    let newCampgroundName = req.body.newCampground;
    let newCampgroundImage = req.body.imageURL;

    let newCampground = {name: newCampgroundName, image: newCampgroundImage}

    campgrounds.push(newCampground)
    res.redirect('/campgrounds');
})
app.get('/campgrounds/new', (req, res) =>{
    res.render('newCampground')
})

const port = process.env.PORT || 3000;

app.listen(port,() =>{
    console.log(`The YelpCamp server has started on port ${port}`)
})