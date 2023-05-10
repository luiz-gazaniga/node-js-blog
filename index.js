const express = require('express')
const path = require('path')

const expressEdge = require('express-edge')

const mongoose = require('mongoose')

const router = express.Router();

const bodyParser = require('body-parser');

const fileUpload = require('express-fileupload');

const createPost = require('./controllers/createPost');
const getAllPosts = require('./controllers/getAllPosts');
const getPost = require('./controllers/getPost');

const app = new express()

mongoose.connect('mongodb://localhost/node-js-blog')

app.use(fileUpload());

app.use(express.static('public'))

app.use(expressEdge)

app.set('views', `${__dirname}/views`)

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true}))

const validateCratePostMiddleware = (req, res, next) => {
    if (!req.files || 
        !req.body.username ||
        !req.body.title ||
        !req.body.subtitle ||
        !req.body.content){
        return res.redirect('/posts/new');
    }

    next();
}

app.use('/posts/store', validateCratePostMiddleware);

app.get('/', getAllPosts);

app.get('/posts/new', (req, res) => {
    res.render('create')
})

//router.post('/posts/store', createPost);
app.post('/posts/store', createPost);

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/posts/:id', getPost);

app.get('/contact', (req, res) => {
    res.render('contact')
})

app.listen(4000, () => {
    console.log('App listening on port 4000')
})