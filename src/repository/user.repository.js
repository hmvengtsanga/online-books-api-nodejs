const UserModel = require("../models/user.model");


class UserRepository {
  async CreateUser({firstname, lastname, email, password, salt}) {
    try {
      const user = new UserModel({
        firstname,
        lastname,
        email,
        password,
        salt
      });
      
      return await user.save();
    } catch (err) {
      throw new Error( "Unable to Create user ");
    }
  }
}

module.exports = UserRepository;