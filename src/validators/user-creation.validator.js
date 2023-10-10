const Joi = require('joi');

const userCreationValidator = {
    firstname: Joi.string().min(2).required(),
    lastname: Joi.string().min(2).required(),
    email: Joi.string().required().email(),
    password: Joi.string().min(5).required(),
}

module.exports.userCreationValidate = (user) => {
    const { error } = Joi.validate(user, userCreationValidator);

    return error?.details.map((err) => err?.message).join("\n ") ?? null;
};