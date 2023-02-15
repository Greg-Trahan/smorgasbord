const router = require("express").Router();
const { Users, Locales } = require("../models");

router.get("/", async (req, res) => {
  console.log("Hello there! General Kenboi.");
  try {
    const localeData = await Locales.findAll({
      include: [{ model: Users }],
    });

    const values = localeData.map((locale) => locale.get({ plain: true }));

    res.render("homepage", {
      values,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
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
