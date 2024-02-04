const router = require('express').Router();
const userService = require('../services/userService');


router.get('/register', (req, res) => {
res.render('user/register');
});

router.post('/register', async (req, res) => {
const userData = req.body;

await userService.register(userData);

res.redirect('/user/login');
});

router.get('/login', (req, res) => {

res.render('user/login');
});

router.post('/login', async (req, res) => {
const { email, password } = req.body;

const token =await userService.login(email, password);
console.log(token);
res.redirect('/');
});

module.exports = router;