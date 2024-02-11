const mongoose = require('mongoose');


exports.getErrorMessage = (error) => {
    let message = '';
    if (error instanceof mongoose.MongooseError){
       message = Object.values(error.errors).map(x => x.message);
    } else if (error instanceof Error) {
       message = error.errors;
    } 

return message;
}