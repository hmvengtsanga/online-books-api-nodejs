
const UserRepository = require("../repository/user.repository");
const { userCreationValidate } = require("../validators/user-creation.validator");
const { GeneratePassword, GenerateSalt, GenerateSignature, ValidatePassword } = require('../utils/auth.util');

class UserService {

    constructor(){
        this.repository = new UserRepository();
    }

    async createUser({ firstname, lastname, email, password }) {

        const errors = userCreationValidate({ firstname, lastname, email, password });

        if(errors) throw new Error(errors);
        
        try {
            let salt = await GenerateSalt();
            let encryptedPwd = await GeneratePassword(password, salt);

            const newUser = await this.repository.CreateUser({ firstname, lastname, email, encryptedPwd, salt});

            return newUser;
        } catch(err){
            throw new Error(err);
        }
    }

}

module.exports = UserService;