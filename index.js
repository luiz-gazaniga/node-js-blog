const express = require('express')

const edge = require('edge.js')

const expressEdge = require('express-edge')

const mongoose = require('mongoose')

const bodyParser = require('body-parser');

const validateCratePostMiddleware = require('./middleware/storePostMiddleware');
const auth = require('./middleware/auth');
const redirectIfAuthenticatedMiddleware = require('./middleware/redirectIfAuthenticatedMiddleware');

const fileUpload = require('express-fileupload');
const expressSession = require('express-session');
const connectMongo = require('connect-mongo');

const connectFlash = require('connect-flash');

const storePost = require('./controllers/storePostController');
const homePageController = require('./controllers/homePage');
const createPostController = require('./controllers/createPost');
const getPost = require('./controllers/getPostController');

const createUserController = require('./controllers/createUserController');
const storeUserController = require('./controllers/storeUserController');

const loginController = require('./controllers/loginController');
const loginUserController = require('./controllers/loginUserController');

const logoutController = require('./controllers/logoutController');

const app = new express();

const mongoStore = new connectMongo({
    mongooseConnection: mongoose.connection,
    mongoUrl: 'mongodb://localhost/node-js-blog' // Specify your MongoDB URL here
  });

app.use(expressSession({
    secret: 'secret',
    store: mongoStore
}));

mongoose.connect('mongodb://localhost/node-js-blog');

app.use(connectFlash());

app.use(fileUpload());

app.use(express.static('public'))

app.use(expressEdge)

app.set('views', `${__dirname}/views`)

app.use('*', (req, res, next) => {
    res.locals.auth = req.session.userId;

    next();
});

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', homePageController);

app.get('/posts/new', auth, createPostController);

app.post('/posts/store', auth, validateCratePostMiddleware, storePost);
app.get('/posts/:id', getPost);

app.get('/auth/register', redirectIfAuthenticatedMiddleware, createUserController);
app.post('/users/register', redirectIfAuthenticatedMiddleware, storeUserController);

app.get('/auth/login', redirectIfAuthenticatedMiddleware, loginController);
app.post('/users/login', redirectIfAuthenticatedMiddleware, loginUserController);

app.get('/auth/logout', auth, logoutController);

app.use((_req, res) => res.render('not-found'));

app.listen(4000, () => {
    console.log('App listening on port 4000')
})