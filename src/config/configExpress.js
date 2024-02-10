const express = require('express');
const path = require('path');
const coockieParser = require('cookie-parser');
const { auth } = require('../middlewares/authMiddlewares');

function configExpress(app) {
    app.use(express.static(path.resolve('src/public')));
    app.use(express.urlencoded({ extended: false }));
    app.use(coockieParser());
    app.use(auth);

    return express;
}

module.exports = configExpress;