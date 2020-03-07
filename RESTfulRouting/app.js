const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose');


mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost/restful_blog_app');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

//CREATE BLOG SCHEMA
const blogSchema = new mongoose.Schema({
    title: String,
    image: {type: String, default: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'},
    body: String,
    created: {type: Date, default: Date.now}
})

//MONGOOSE MODEL CONFIG
const Blog = mongoose.model('Blog', blogSchema)
 

// Blog.create({
//     title: 'Test Blog',
//     body:'I hope this works'
// })

//RESTful Routes

//INDEX ROUTE
app.get('/blogs', (req, res)=>{
    Blog.find({}, (err, allBlogs)=>{
        if(err){
            console.log('BIG FAT ERROR!!!!', err)
        } else{
            res.render('index', {blogs: allBlogs})
        }
    })
})

//NEW ROUTE
app.get('/blogs/new', (req, res)=>{
    res.render('new')
})

//CREATE ROUTE
app.post('/blogs', (req,res)=>{
    const blogTitle = req.body.title,
          blogImage = req.body.image,
          blogBody = req.body.body;

    const newBlog = {title: blogTitle, image: blogImage, body: blogBody};
    
    Blog.create(newBlog, (err, blog)=>{
        if(err){
            console.log(`there was an error!: `, err)
        } else {
            res.redirect('/blogs')
        }
    })

})



const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`The Blog is up on port ${port}`)
})