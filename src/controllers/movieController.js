const router = require('express').Router();
const movieService = require('../services/movieService');


router.get('/create', (req, res) => {
    res.render('create')
});

router.post('/create', async (req, res) => {
   const newMovie = req.body;
try {
    await movieService.create(newMovie);
    res.redirect('/');
} catch (error) {
    console.error(error);
    res.redirect('/create');
}
   
});

router.get('/movies/:movieId', async (req, res) => {
    const movieId = req.params.movieId;
    try {
        const movie = await movieService.getOne(movieId).lean();
        //TODO: stars functionality
        movie.ratingStars = '&#x2605;'.repeat(movie.rating);
        res.render('details', { movie })

    } catch (error) {
        console.error(error);
    }
       
});

router.get('/movies/:movieId/attach', (req, res) => {
res.render('cast/attach')
});


module.exports = router;