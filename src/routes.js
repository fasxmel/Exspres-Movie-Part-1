const router = require('express').Router();

const homeController = require('./controllers/homeController');
const movieController = require('./controllers/movieController');
const castCotroller = require('./controllers/castCotroller');

router.use(homeController);
router.use(movieController);
router.use('/cast',castCotroller);


router.get('*', (req, res) => {
    res.redirect('/404')
});

module.exports = router;