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

// exports.validate = (Model) => async (req, res, next) => {
//    try {
//    const modelInstance = new Model(req.body);
//    const isValid = await modelInstance.validate();
//    if (!isValid) {
//       res.redirect('/404');
//     }
//    next(); 
// } catch (error) {
//    const message = this.getErrorMessage(error)
//    res.render('404', {error: message});
// }
 
// }