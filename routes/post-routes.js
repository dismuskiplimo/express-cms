const router = require("express").Router();
const {PostController} = require("../controllers");

// display add post page
router.get('/posts/new', (req, res) => { PostController.new_post(req, res);});

// process the new blog post
router.post('/posts/new', (req, res) => { PostController.post_new_post(req, res);});

// display a single post
router.get('/posts/:id/view', (req, res) => { PostController.view_post(req, res);});

// display a single post
router.get('/posts/:id/edit', (req, res) => { PostController.edit_post(req, res);});

// update a single post
router.post('/posts/:id/edit', (req, res) => { PostController.post_edit_post(req, res);});

// delete a single post
router.get('/posts/:id/delete', (req, res) => { PostController.delete_post(req, res);});

module.exports = router;