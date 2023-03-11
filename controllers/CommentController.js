const Comment = require('../models/comment')

const CommentController = {};

// add a comment to database
CommentController.post_new_comment = (req, res) => {
    
    Comment.create({
        content: req.body.content,
        post_id: req.params.id,
        user_id: req.session.user,
    })
    .then(post => {
        res.redirect("/posts/" + req.params.id + "/view");
    })
    .catch(err => {
        console.log(err);
    });
}

module.exports = CommentController;