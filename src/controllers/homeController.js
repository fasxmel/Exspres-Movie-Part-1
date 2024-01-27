const router = require('express').Router();
const movieService = require('../services/movieService')

router.get('/', async (req, res) => {
    try {
        const movies = await  movieService.getAll();
        res.render('home', { movies })
    } catch (error) {
        console.error(error);
        res.render('error')
    }
    
});

router.get('/about', (req, res) => {
    
    res.render('about');
});

router.get('/search', async (req, res) => {
    const {title, genre, year} = req.query
    const moviesResult = movieService.search(title, genre, year);

    res.render('search', { movies: moviesResult, title, genre, year });
});

router.get('/404', (req, res) => {
    
 res.render('404');
});



module.exports = router;