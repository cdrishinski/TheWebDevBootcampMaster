const express = require('express'),
    app = express(),
    axios = require('axios'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');
    
    
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost/yelp_camp');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs')


//SCHEMA SETUP

const campgroundSchema = new mongoose.Schema({
    name: String,
    image: String
});

const Campground = mongoose.model('Campground', campgroundSchema);

// Campground.create(
//     {
//         name: 'soldier hollow',
//         image: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
//     }, (err, campground) => {
//         if (err) {
//             console.log('somethings wrong', err)
//         } else (
//             console.log('it worked', campground)
//         )
//     })


app.get('/', (req, res) => {
    res.render('landing')
})
app.get('/campgrounds', (req, res) => {
    //GET ALL CAMPGROUNDS
    Campground.find({}, (err, allCampgrounds) => {
        if (err) {
            console.log('we have an error', err)
        } else {
            console.log('success loading campgrounds GET    !!!')
            res.render('campgrounds', { campgrounds: allCampgrounds })
        }
    })

})
app.post('/campgrounds', (req, res) => {

    let newCampgroundName = req.body.newCampground;
    let newCampgroundImage = req.body.imageURL;

    let newCampground = {name: newCampgroundName, image: newCampgroundImage}

    console.log(newCampground)

    // CREATE NEW CAMPGROUND IN DB
    Campground.create(newCampground, (err, campground)=>{
        if(err){
            console.log('error creating campground', err)
        } else {
            console.log('succesfully created campground', campground)
            res.redirect('/campgrounds');
        }
    })
})
app.get('/campgrounds/new', (req, res) => {
    res.render('newCampground')
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`The YelpCamp server has started on port ${port}`)
})