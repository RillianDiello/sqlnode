const User = require("../models/User");

module.exports = {
  async store(req, res) {
    const { name, email, age } = req.body;
    const user = await User.create({ name, email, age });
    return res.json(user);
  },

  async index(req, res) {
    const users = await User.findAll();
    return res.json(users);
  },
};
