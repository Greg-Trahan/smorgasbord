const router = require("express").Router();
const Users = require("../models/Users");
const Locales = require("../models/Locales");

router.get("/", async (req, res) => {
  console.log("Hello there! General Kenboi.");
  try {
    const localeData = await Locales.findAll({
      // include: [{ model: Users, attributes: ["name"] }],
    });

    // console.log(localeData);

    const localesMap = localeData.map((locale) => locale.get({ plain: true }));
    // console.log(localesMap);

    const localesUsers = Promise.all(
      localesMap.map(async (locale) => {
        const user = await Users.findByPk(locale.user_id);
        const plainUser = user.get({ plain: true });
        const newLocale = { ...locale, username: plainUser.name };
        console.log(newLocale);
        return newLocale;
      })
    );

    res.render("homepage", {
      localesUsers,
      logged_in: req.session.logged_in,
    });

    console.log(localesUsers);

    // console.log(localesUsers);
    // Promise.all(localesUsers).then((values) => {
    //   console.log(values);
    //   res.render("homepage", {
    //     values,
    //     logged_in: req.session.logged_in,
    //   });
    // });

    // console.log(localeData);
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
