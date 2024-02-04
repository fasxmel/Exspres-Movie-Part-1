const User = require('../models/user');


exports.register = (userData) => User.create(userData);

exports.login = (userData) => User.findOne(userData);
