const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/cat_app") //uses last piece if available, or creates it if its not created

const catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
})

const Cat = mongoose.model('Cat', catSchema)
//add new cat to db

// const george = new Cat({
//     name: 'mrs norris',
//     age: 101,
//     temperament: 'slouchy'
// })

// george.save((err, cat)=>{
//     if(err){ 
//         console.log('something went wrong')
//     } else {
//         console.log('we just save a cat')
//         console.log(cat)
//     }
// })

//retrieve each cat

Cat.find({}, (err, cats)=>{
    if(err){
        console.log('oh no!!', err)
    } else{
        console.log('all the cats: ',cats)
    }
})