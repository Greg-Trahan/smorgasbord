const router = require("express").Router();
const Locales = require("../models");
const Users = require("../models");

router.get("/:id", async (req, res) => {
  try {
    const localeData = await Locales.getByPk(req.params.id);
    if (!localeData) {
      res.status(404).json("Sorry, there is no restaurant by that id");
    } else {
      const locale = localeData.get({ plain: true });
      res.render("details", { locale, logged_in: req.session.logged_in });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
