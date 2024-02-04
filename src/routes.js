const router = require('express').Router();

const homeController = require('./controllers/homeController');
const movieController = require('./controllers/movieController');
const castCotroller = require('./controllers/castCotroller');
const userController = require('./controllers/userController');

router.use(homeController);
router.use(movieController);
router.use('/cast',castCotroller);
router.use('/user',userController);


router.get('*', (req, res) => {
    res.redirect('/404')
});

module.exports = router;