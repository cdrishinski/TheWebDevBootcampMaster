const express = require('express'),
      app = express(),
      axios = require('axios'),
      bodyParser = require('body-parser')

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine', 'ejs')


let campgrounds = [
    {name: 'toga', image: 'https://images.unsplash.com/photo-1571685330542-0da6a6a8edc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'}, 
    {name: 'soldier hollow', image: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'},
    {name: 'bubble rock', image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'},
    {name:'eureka', image: 'https://images.unsplash.com/photo-1557943819-b09ae5a1375c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60™'},
    {name: 'toga', image: 'https://images.unsplash.com/photo-1571685330542-0da6a6a8edc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'}, 
    {name: 'soldier hollow', image: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'},
    {name: 'bubble rock', image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'},
    {name:'eureka', image: 'https://images.unsplash.com/photo-1557943819-b09ae5a1375c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60™'},
    {name: 'toga', image: 'https://images.unsplash.com/photo-1571685330542-0da6a6a8edc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'}, 
    {name: 'soldier hollow', image: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'},
    {name: 'bubble rock', image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'},
    {name:'eureka', image: 'https://images.unsplash.com/photo-1557943819-b09ae5a1375c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60™'}
]

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