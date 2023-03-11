// import the various npm modules
const express = require('express'); 
const {engine} = require('express-handlebars');

const session = require('express-session');
const SequelizeStore = require("connect-session-sequelize")(session.Store);

// import the dotenv config values
require('dotenv').config();

// controllers
const {UserController, PostController, CommentController} = require('./controllers');

// sequalize connection
const sequelizeInstance = require('./config/sequelize');

// router
const { userRouter } = require('./routes');

// instantiate express
const app = express();

// instantiate the session store
const sessionStore = new SequelizeStore({
    db: sequelizeInstance,
});

// set up express session
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
    store: sessionStore,
}));

// pass the session to the locals for use in handlebars
app.use(function (req, res, next) {
    res.locals.session = req.session;
    next();
});

// sync the db
sequelizeInstance.sync();
sessionStore.sync({force: true});

// set the templating engine to express handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// set a static folder to be able to load css and js files
app.use(express.static('public'));

// to allow for POST data
app.use(express.urlencoded({ extended: true }));

/**
 * USER ROUTES
 */
app.use(userRouter);

/**
 * BLOG POST ROUTES
 */

// display add post page
app.get('/posts/new', (req, res) => { PostController.new_post(req, res);});

// process the new blog post
app.post('/posts/new', (req, res) => { PostController.post_new_post(req, res);});

// display a single post
app.get('/posts/:id/view', (req, res) => { PostController.view_post(req, res);});

// display a single post
app.get('/posts/:id/edit', (req, res) => { PostController.edit_post(req, res);});

// update a single post
app.post('/posts/:id/edit', (req, res) => { PostController.post_edit_post(req, res);});

// delete a single post
app.get('/posts/:id/delete', (req, res) => { PostController.delete_post(req, res);});

/**
 * COMMENTS ROUTES
 */

// post a single comment
app.post('/posts/:id/comment', (req, res) => { CommentController.post_new_comment(req, res);});

// homepage route
app.get('/', (req, res) => {
    PostController.all_posts(req, res);
});


// start the server
app.listen(process.env.APP_PORT, () => {
  console.log(`Listening on port ${process.env.APP_PORT}`);
})