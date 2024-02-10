const jwt = require('../utils/jwt');
const { SECRET } = require('../config/configEnv');

exports.auth = async (req, res, next) => {
    const token = req.cookies['user'];
    if (!token) {
       return next()
    }
    try {
        const decodetToken =  await jwt.verify(token, SECRET)
        
        req.user = decodetToken;
       
        next();
    } catch (error) {
        res.clearCookie('user');
        res.redirect('/user/login')
    }
    
}

exports.isAuth = (req, res, next) => {

    if (!req.user) {
        return res.redirect("/login")
    }

next()
}

