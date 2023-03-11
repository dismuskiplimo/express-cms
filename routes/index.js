const router = require("express").Router();

const userRoutes = require("./user-routes");
const postRoutes = require("./post-routes");
const commentRoutes = require("./comment-routes");

router.use(userRoutes);
router.use(postRoutes);
router.use(commentRoutes);

module.exports = router;