const Tech = require("../models/Tech");
const User = require("../models/User");
module.exports = {
  async index(req, res) {
    const { user_id } = req.params;
    const user = await User.findByPk(user_id, {
      include: { association: "techs", through: { attributes: [] } },
    });

    return res.json(user.techs);
  },
  async store(req, res) {
    const { user_id } = req.params;
    const { name } = req.body;

    const user = await User.findByPk(user_id);
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }
    const [tech] = await Tech.findOrCreate({
      where: { name },
    });
    await user.addTechs(tech);
    return res.json(tech);
  },
};
