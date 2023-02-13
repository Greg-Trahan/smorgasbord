const router = require("express").Router();
const Users = require("../models/Users");
const Locales = require("../models/Locales");

router.get("/", async (req, res) => {
  try {
    const localeData = await Locales.findAll({
      include: [{ model: Users, attributes: ["name"] }],
    });
    console.log(localeData);

    const localesMap = localeData.map((locale) => locale.get({ plain: true }));

    res.render("homepage", {
      localesMap,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log("You done messed up A-aron");
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
  res.render("login", { logged_in: req.session.logged_in });
});

router.get("/logout", async (req, res) => {
  res.render("logout", { logged_in: req.session.logged_in });
});

module.exports = router;
