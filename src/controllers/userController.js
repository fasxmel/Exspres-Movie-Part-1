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

module.exports = router;