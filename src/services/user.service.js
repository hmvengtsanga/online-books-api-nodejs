
const UserRepository = require("../repository/user.repository");
const { GeneratePassword, GenerateSalt, GenerateSignature, ValidatePassword } = require('../utils/auth.util');

class UserService {

    constructor(){
        this.repository = new UserRepository();
    }

    async createUser(user) {

        const { firstname, lastname, email, password } = user;
        
        try {
            let salt = await GenerateSalt();
            let encryptedPwd = await GeneratePassword(password, salt);

            const newUser = await this.repository.CreateUser({ firstname, lastname, email, encryptedPwd, salt});

            return newUser;
        } catch(err){
            throw new Error(err.message);
        }
    }

}

module.exports = UserService;