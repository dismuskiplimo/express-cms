const Comment = require('../models/comment')

// add a comment to database
exports.post_new_comment = (req, res) => {
    
    Comment.create({
        content: req.body.content,
        post_id: req.params.id,
        user_id: req.session.user,
    })
    .then(post => {
        res.redirect("/posts/" + req.params.id + "/view");
        res.stop();
    })
    .catch(err => {
        console.log(err);
    });
}