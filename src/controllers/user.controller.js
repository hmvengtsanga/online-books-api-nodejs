const UserService = require("../services/user.service");
const isValidUserPlayload = require("../utils/user-validation.util");

const service = new UserService();

module.exports.createUser = async (req, res, next) => {
  try {
     if (false === isValidUserPlayload( req.body)) {
        throw new Error("Missing data for creating");
     }

     const {firstname, lastname, email, password} = req.body;

     const data = await service.createUser({firstname, lastname, email, password});

     return res.json(data);
  } catch (err) {
    next(err);
  }
};