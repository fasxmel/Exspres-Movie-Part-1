const router = require('express').Router();
const userService = require('../services/userService');


router.get('/register', (req, res) => {
res.render('user/register');
});

router.post('/register', async (req, res) => {
const userData = req.body;

try {
 await userService.register(userData);
 res.redirect('/user/login');
} catch (error) {
   
res.render('user/register', { error: error.message });
}

});

router.get('/login', (req, res) => {

res.render('user/login');
});

router.post('/login', async (req, res) => {
//TODO: try catch block
const { email, password } = req.body;

const token = await userService.login(email, password);


res.cookie('user', token);
res.redirect('/');
});

router.get('/logout', (req, res) => {
res.clearCookie('user');
res.redirect('/');
});

module.exports = router;