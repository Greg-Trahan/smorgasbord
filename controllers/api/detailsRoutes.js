const router = require("express").Router();
const { Users, Locales, Reviews } = require("../../models");
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

router.post("/:id", async (req, res) => {
  try {
    const data = await Reviews.create({
      // ...req.body,
      reviewtext: req.body.content,
      locale_id: req.session.locale_id,
      user_id: req.body.user_id,
    });
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json(err);
    console.log(err.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const data = await Reviews.update(
      { reviewtext: req.body.content },
      {
        where: {
          id: req.body.review_id,
        },
      }
    );
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const data = await Reviews.destroy({ where: { id: req.body.review_id } });
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json(err);
    console.log(err.message);
  }
});
//Add post, put, delete comments

module.exports = router;
