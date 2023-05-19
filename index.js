require('dotenv').config();
const express = require('express');
const cloudinary = require('cloudinary');
const expressEdge = require('express-edge');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const expressSession = require('express-session');
const connectMongo = require('connect-mongo');
const connectFlash = require('connect-flash');

const validateCratePostMiddleware = require('./middleware/storePostMiddleware');
const auth = require('./middleware/authMiddleware');
const redirectIfAuthenticatedMiddleware = require('./middleware/redirectIfAuthenticatedMiddleware');

const storePostController = require('./controllers/storePostController');
const homePageController = require('./controllers/homePageController');
const createPostController = require('./controllers/createPostController');
const getPostController = require('./controllers/getPostController');
const createUserController = require('./controllers/createUserController');
const storeUserController = require('./controllers/storeUserController');
const loginController = require('./controllers/loginController');
const loginUserController = require('./controllers/loginUserController');
const logoutController = require('./controllers/logoutController');

const app = express();

// Middleware
const mongoStore = new connectMongo({
    mongooseConnection: mongoose.connection,
    mongoUrl: process.env.DB_URI // Specify your MongoDB URL here
  });

app.use(expressSession({
    secret: process.env.EXPRESS_SESSION_KEY,
    store: mongoStore
}));

app.use(connectFlash());
app.use(fileUpload());
app.use(express.static('public'));
app.use(expressEdge);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', `${__dirname}/views`);
app.use('*', (req, res, next) => {
  res.locals.auth = req.session.userId;
  next();
});

// Database
mongoose.connect(process.env.DB_URI);

// Cloudinary
cloudinary.config({
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  cloud_name: process.env.CLOUDINARY_NAME
});

// Routes
app.get('/', homePageController);
app.get('/posts/new', auth, createPostController);
app.post('/posts/store', auth, validateCratePostMiddleware, storePostController);
app.get('/posts/:id', getPostController);
app.get('/auth/register', redirectIfAuthenticatedMiddleware, createUserController);
app.post('/users/register', redirectIfAuthenticatedMiddleware, storeUserController);
app.get('/auth/login', redirectIfAuthenticatedMiddleware, loginController);
app.post('/users/login', redirectIfAuthenticatedMiddleware, loginUserController);
app.get('/auth/logout', auth, logoutController);
app.use((_req, res) => res.render('not-found'));

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});