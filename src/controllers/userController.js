const router = require('express').Router();
const User = require('../models/user');
const userService = require('../services/userService');
const errors = require('../utils/errors');

router.get('/register', (req, res) => {
res.render('user/register');
});

router.post('/register', async (req, res) => {

try {
 await userService.register(userData);
 res.redirect('/user/login');
} catch (error) {
  const message = errors.getErrorMessage(error)
  res.render('user/register', { ...userData, error: message });
}

});

router.get('/login', (req, res) => {

res.render('user/login');
});

router.post('/login', async (req, res) => {
const { email, password } = req.body;
try {
const token = await userService.login(email, password);
res.cookie('user', token);
res.redirect('/');
} catch (error) {
  //TODO: message is not rendered
  const message = errors.getErrorMessage(error)
  console.log(message);
  res.render('user/login', { ...req.body, error: message });
}

});

router.get('/logout', (req, res) => {
res.clearCookie('user');
res.redirect('/');
});

module.exports = router;