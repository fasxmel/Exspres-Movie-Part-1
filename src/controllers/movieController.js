const router = require('express').Router();
const movieService = require('../controllers/movieController');
const Movie = require('../models/movie');

router.get('/create', (req, res) => {
    res.render('create')
});

router.post('/create', async (req, res) => {
   const {title, genre, director, year, imageUrl, rating, description} = req.body;
   
   let movie = new Movie({ title, genre, director, year, imageUrl, rating, description });

    await movie.save();

    res.redirect('/')
});

router.get('/movies/:movieId', (req, res) => {
    const movieId = req.params.movieId;
    const movie = movieService.getOne(movieId);

    movie.ratingStars = '&#x2605;'.repeat(movie.rating);
    res.render('details', { movie })
});



module.exports = router;