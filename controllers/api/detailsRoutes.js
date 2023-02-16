const router = require("express").Router();
const Locales = require("../../models/Locales");
const Users = require("../../models/Users");
const withAuth = require("../../utils/withAuth");

router.get("/:id", withAuth, async (req, res) => {
  try {
    const localeData = await Locales.findByPk(req.params.id);
    if (!localeData) {
      res.status(404).json("Sorry, there is no restaurant by that id");
      return;
    }

    const values = localeData.get({ plain: true });
    res.render("detail", { values, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
    console.log(err.message);
  }
});

//Add post, put, delete comments

module.exports = router;
