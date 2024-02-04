const express = require('express');
const path = require('path');
const coockieParser = require('cookie-parser');
function configExpress(app) {
    app.use(express.static(path.resolve('src/public')));
    app.use(express.urlencoded({ extended: false }));
    app.use(coockieParser());

    return express;
}

module.exports = configExpress;