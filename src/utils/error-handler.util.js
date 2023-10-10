
const ErrorHandler = async(err,req,res,next) => {
    console.log('[ERROR] ', err);
    if(err){

     return res.status(err.statusCode).json({'message': err.message})
    }

    next();
}

module.exports = ErrorHandler;