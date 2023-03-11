const router = require("express").Router();

const userRoutes = require("./user-route");

router.use("/", userRoutes);

module.exports = router;