const router = require("express").Router();
const loginRoutes = require("./accountRoutes");
const detailsRoutes = require("./detailsRoutes");

router.use("/account", loginRoutes);
router.use("/details", detailsRoutes);

module.exports = router;
