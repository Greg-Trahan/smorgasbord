const router = require("express").Router();
const Locales = require("../models");
const Users = require("../models");

router.get("/", async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const localeData = await Locales.findAll({
      include: [
        {
          model: Users,
          attributes: ["name"],
        },
      ],
    });

    // Serialize data so the template can read it
    const projects = localeData.map((project) => project.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render("homepage", {
      projects,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
