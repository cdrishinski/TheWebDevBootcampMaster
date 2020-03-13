const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      methodOverride = require('method-override');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost/baby_names');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs')

//MODEL
const nameSchema = new mongoose.Schema({
    firstName: String,
    middleName: String,
    lastName: {type: String, default: 'Drishinski'},
    gender: String
})

//NAME CONFIG
const Name = mongoose.model('Name', nameSchema)

// Name.create({
//     firstName: 'Clardy',
//     middleName: 'Owey',
//     gender: 'Male'

// })

//INDEX ROUTE
app.get('/names', (req, res)=>{
    Name.find({}, (err, allNames)=>{
        if(err){
            console.log(err)
        } else {
            res.render('index', {names: allNames})
        }
    })
})

//NEW
app.get('/names/new', (req, res)=>{
    res.render('new')
})

//CREATE
app.post('/names', (req, res)=>{
    console.log(req.body)
    Name.create(req.body.name, (err)=>{
        if(err){
            console.log(err)
        } else {
            res.redirect('/names')
        }
    })
})

//SHOW
app.get('/names/:id', (req, res)=>{
    Name.findById(req.params.id, (err, foudName)=>{
        if(err){
            console.log(err)
        }else{
            res.render('show', {names: foudName})
        }
    })
})
//EDIT
app.get('/names/:id/edit', (req, res)=>{
    Name.findById(req.params.id, (err, foudName)=>{
        if(err){
            console.log(err)
        } else {
            res.render('edit', {name: foudName})
        }
    })
})
//UPDATE
app.put('/names/:id', (req, res)=>{
    Name.findByIdAndUpdate(req.params.id, req.body.name, (err)=>{
        if(err){
            console.log(err)
        } else{
            res.redirect('/names')
        }
    })
})
//DELETE
app.delete('/names/:id', (req, res)=>{
    Name.findByIdAndRemove(req.params.id, (err)=>{
        if(err){
            console.log(err)
        } else {
            res.redirect('/names')
        }
    })
})


const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log(`Baby Name app up on port ${port}`)
})