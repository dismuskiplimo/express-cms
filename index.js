// import the various npm modules
const express = require('express'); 
const {engine} = require('express-handlebars');

const session = require('express-session');
const SequelizeStore = require("connect-session-sequelize")(session.Store);

// import the dotenv config values
require('dotenv').config();

// controllers
const {PostController} = require('./controllers');

// sequalize connection
const sequelize = require('./config/sequelize');

// router
const routes = require('./routes');

// instantiate express
const app = express();

// instantiate the session store
const sessionStore = new SequelizeStore({
    db: sequelize,
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
sequelize.sync();
sessionStore.sync({force: true});

// set the templating engine to express handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// to allow for POST data
app.use(express.urlencoded({ extended: true }));

// set up routes
app.use(routes);

// homepage route
app.get('/', (req, res) => {
    PostController.all_posts(req, res);
});

// start the server
app.listen(process.env.APP_PORT, () => {
  console.log(`Listening on port ${process.env.APP_PORT}`);
})