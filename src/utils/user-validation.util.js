
module.exports.isValidUserPlayload = (payload) => {
   
  const hasFirstname =  payload.hasOwnProperty('firstname') && !!payload.firstname;
  const hasLastname =  payload.hasOwnProperty('lastname') && !!payload.lastname;
  const hasEmail =  payload.hasOwnProperty('email') && !!payload.email;
  const hasPassword =  user.hasOwnProperty('password') && !!payload.password;


  return hasFirstname && hasLastname && hasEmail && hasPassword;
};