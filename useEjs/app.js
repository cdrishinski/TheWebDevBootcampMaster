const express = require('express');
const app = express();


app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/fallinlovewith/:thing', (req, res) => {
    const thing = req.params.thing
    res.render('love', {thingVar: thing})
})

app.get('/posts', (req, res) => {
    let posts = [
        {title: "Post 1", author: 'Susy'},
        {title: "Post 2", author: 'Nora'},
        {title: "Post 3", author: 'James'}
    ]

    res.render('posts', {posts: posts})

})

const port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log("Server Has Started on Port 3000!");
});