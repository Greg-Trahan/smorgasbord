const router = require("express").Router();
const loginRoutes = require("./loginRoutes");
const detailsRoutes = require("./detailsRoutes");

router.use("/login", loginRoutes);
router.use("/details", loginRoutes);

module.exports = router;
