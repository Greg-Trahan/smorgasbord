const router = require("express").Router();
const Locales = require("../../models/Locales");
const Users = require("../../models/Users");
const nodemailer = require("../../utils/nodeMailer");
const bcrypt = require("bcrypt");

router.post("/signup", async (req, res) => {
  try {
    const user = await Users.create(req.body);
    console.log(req.body);
    req.session.save(() => {
      req.session.logged_in = true;
      req.session.user_id = user.user_id;
      res.status(200).json(user);
    });
    nodemailer();
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await Users.findOne({
      where: { email: req.body.email },
    });
    if (!user) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }
    const validPassword = await user.checkPassword(req.body.password);
    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.logged_in = true;
      req.session.user_id = user.id;
      req.session.name = user.name;
      res.json({ user: user, message: "You are now logged in!" });
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
