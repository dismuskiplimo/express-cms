const router = require("express").Router();
const {CommentController} = require("../controllers");

// post a single comment
router.post('/posts/:id/comment', (req, res) => { CommentController.post_new_comment(req, res);});


module.exports = router;