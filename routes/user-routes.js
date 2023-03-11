const router = require("express").Router();
const {UserController} = require("../controllers");

// signup route
// GET
router.get('/signup', (req, res) => { UserController.signup(req, res) });

//POST
router.post('/signup', (req, res) => { UserController.post_signup(req, res) });

// signin route
// GET
router.get('/signin', (req, res) => { UserController.signin(req, res) });

//POST
router.post('/signin', (req, res) => { UserController.post_signin(req, res) });

// logout route
router.get('/logout', (req, res) => { UserController.logout(req, res); });

// dashboard route
router.get('/dashboard', (req, res) => { UserController.blog_posts(req, res); });

module.exports = router;