const router = require("express").Router();
const Locales = require("../models");
const Users = require("../models");

router.get("/", async (req, res) => {
  try {
    const localeData = await Locales.findAll({
      include: [
        {
          model: Users,
          attributes: ["name"],
        },
      ],
    });

    const locales = localeData.map((project) => project.get({ plain: true }));

    res.render("homepage", {
      locales,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
  res.render("login", { logged_in: req.session.logged_in });
});

router.get("/details/:id", async (req, res) => {
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

router.get("/logout", async (req, res) => {
  res.render("logout", { logged_in: req.session.logged_in });
});

module.exports = router;
