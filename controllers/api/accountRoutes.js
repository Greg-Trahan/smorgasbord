const router = require("express").Router();
const Locales = require("../models");
const Users = require("../models");

router.post("/signup", async (req, res) => {
  try {
    const user = await User.create(req.body);
    req.session.save(() => {
      req.session.logged_in = true;
      req.session.user_id = user.user_id;
      res.status(200).json(user);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ where: { username: req.body.username } });
    if (!user) {
      throw new Error("Incorrect username or password");
    }
    if (!user.checkPassword(req.body.password)) {
      throw new Error("Incorrect username or password");
    }
    req.session.save(() => {
      req.session.logged_in = true;
      req.session.user_id = user.user_id;
      res.status(200).json(user);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/logout", async (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(400).end();
  }
});

module.exports = router;
