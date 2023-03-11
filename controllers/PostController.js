const Post = require('../models/post');
const Comment = require('../models/comment');
const User = require('../models/user');

const PostController = {};

// display the form to add post
PostController.new_post = (req, res) => {
    res.render('post-new');
}

// add the post to database
PostController.post_new_post = (req, res) => {
    
    Post.create({
        title: req.body.title,
        content: req.body.content,
        user_id: req.session.user,
    })
    .then(post => {
        res.redirect("/dashboard");
    })
    .catch(err => {
        console.log(err);
    });
}

// display a post
PostController.view_post = (req, res) => {
    Post.findOne({
        where:{
            id: req.params.id,
        },

        raw: true,
    })
    .then(post =>{
        
        if(post){
            User.findAll({raw: true})
            .then(users => {
                
                let isLoggedIn = req.session.user ? true : false;
                let isAuthor = req.session.user && post.user_id == req.session.user;

                Comment.findAll({
                    where: {
                        post_id: post.id,
                    },
                    raw: true,
                })
                .then(comments => {
                    for(let i = 0; i < comments.length; i++){
                        for(let j = 0; j < users.length; j++){
                            if(comments[i].user_id == users[j].id){
                                comments[i].username = users[j].username;
                                continue;
                            }
                        }
                    }

                    
                    for(let j = 0; j < users.length; j++){
                        if(post.user_id == users[j].id){
                            post.username = users[j].username;
                            break;
                        }
                    }
                  
                    
                    res.render('post-view', {
                        isAuthor,
                        isLoggedIn,
                        post: post,
                        comments,
                    });
                })
                .catch(err => {console.log(err)});

    
            })
            .catch(error => {console.log(error)});
        }
    })
    .catch(err => {
        console.log(err);
    });
}

// display the form to edit post
PostController.edit_post = (req, res) => {
    Post.findOne({
        where:{
            id: req.params.id,
        }
    })
    .then(post =>{
        if(post){
            res.render('post-edit', {post: post.get()});
        }
    })
    .catch(err => {
        console.log(err);
    });
}

// process  a post update
PostController.post_edit_post = (req, res) => {
    Post.update({
        title: req.body.title,
        content: req.body.content,
    },
    
    {
        where:{
            id: req.params.id,
        }
    })
    .then(result => {
        res.redirect(`/posts/${result.id}/edit`);
    })
    .catch(err => {
        console.log(err);
    });
}

//delete a post
PostController.delete_post = (req, res) => {
    Post.findOne({
        where:{
            id: req.params.id,
        }
    })
    .then(post =>{
        if(post){
            post.destroy();
        }

        res.redirect("/dashboard");
    })
    .catch(err => {
        console.log(err);
    });
}

// display all the blog posts
PostController.all_posts = (req, res) => {
    
    // find the posts
    Post.findAll({raw: true})
    .then(posts => {
        res.render('index', {posts});
    })
    .catch(err => {
        console.log(err);
    });
}

module.exports = PostController;