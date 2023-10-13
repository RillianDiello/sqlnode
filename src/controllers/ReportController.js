const User = require("../models/User");
const { Op } = require("sequelize");
module.exports = {
  async show(req, res) {
    // find all user that emails

    const users = await User.findAll({
      attributes: ["name", "email"],
      where: {
        email: {
          [Op.like]: "%@email.com",
        },
      },
      include: [
        { association: "addresses", where: { street: "treze de junho" } },
        {
          association: "techs",
          required: false,
          where: {
            name: {
              [Op.like]: "react%",
            },
          },
        },
      ],
    });
    return res.json(users);
  },
};
