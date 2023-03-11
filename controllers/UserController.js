const bcrypt = require('bcrypt');

// database models
const User = require('../models/user');
const Post = require('../models/post');

const UserController = {};

// displays the sign in page
UserController.signin = (req, res) => {
    // redirect if user is already logged in
    if(req.session.user){
        res.redirect("/dashboard");
    }

    else{
        res.locals.msg = req.query.msg;
        res.render('signin');
    }
}

// process the sign in
UserController.post_signin = (req, res) => {
    // redirect if user is already logged in
    if(req.session.user){
        res.redirect("/dashboard");
    }

    else{
        // query the user
        User.findOne({
            where: { username: req.body.username },
        })
        .then(user => {
            //user was found
            if(user){
                user = user.get();

                // verify the password
                bcrypt.compare(req.body.password, user.password).then(function(result) {
                    // username and password was valid
                    if(result){
                        req.session.user = user.id;
                        req.session.username = user.username;

                        // redirect to dashboard
                        res.redirect('/dashboard');
                    }else{
                        res.redirect('/signin?msg=' + encodeURI("Invalid Username/Password"));
                    }
                });
            }else{
                res.redirect('/signin?msg=' + encodeURI("Invalid Username/Password"));
            }
        })
        .catch(err => {
            console.log(err);
        });
    }
}

// display the signup page
UserController.signup = (req, res) => {
    // redirect if user is already logged in
    if(req.session.user){
        res.redirect("/dashboard");
    }

    else{
        res.locals.msg = req.query.msg;
        res.render('signup');
    }
}

// process the signup page
UserController.post_signup = (req, res) => {
    // redirect if user is already logged in
    if(req.session.user){
        res.redirect("/dashboard");
    }

    else{
        // hash the password
        bcrypt.hash(req.body.password, parseInt(process.env.SALT_ROUNDS)).then((hash) => {
            // add the user to database
            User.create({
                username: req.body.username,
                password: hash,
        })
        .then(user => {
                user = user.get();
                req.session.user = user.id;
                req.session.username = user.username;

                res.redirect("/dashboard");
                
            })
        .catch(err => {});
        });
    }
}

// log out the user
UserController.logout = (req, res) => {
    req.session.user = null;
    req.session.username = null;

    res.redirect("/signin");
}

// display blog posts belonging to the user
UserController.blog_posts = (req, res) => {
    // redirect to sign in page if user is not logged in
    if(!req.session.user){
        res.redirect("/signin");
    }

    else{
        // find the posts
        Post.findAll({
            where: {
                user_id: req.session.user,
            },
            raw: true,
        })
        .then(posts => {
            res.render('dashboard', {posts});
        })
        .catch(err => {
            console.log(err);
        });
    }
}

module.exports = UserController;