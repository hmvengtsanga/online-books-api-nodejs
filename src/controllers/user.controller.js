const UserService = require("../services/user.service");

const service = new UserService();

module.exports.createUser = async (req, res) => {
  try {
    const {firstname, lastname, email, password} = req.body; 

    const data = await service.createUser({firstname, lastname, email, password});

     return res.json(data);
  } catch (err) {
    res.status(400).json(err);
  }
};