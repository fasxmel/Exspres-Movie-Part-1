const router = require('express').Router();
const movieService = require('../services/movieService');
const castService = require('../services/castService');

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
     //TODO: try catch block
    const movieId = req.params.movieId;
    const movie = await movieService.getOne(movieId).lean();
    //const casts = await castService.getByIds(movie.casts).lean();
     //TODO: stars functionality
        movie.ratingStars = '&#x2605;'.repeat(movie.rating);
        res.render('details', { movie });
     
});

router.get('/movies/:movieId/attach', async (req, res) => {
    //TODO: try catch block
     const movie = await movieService.getOne(req.params.movieId).lean();
     const casts = await castService.getAll().lean();
     //TODO: remove exsistent cast from movie

     res.render('cast/attach', { ...movie, casts});
});

router.post('/movies/:movieId/attach', async (req, res) => {
    //TODO: try catch block
    const movie = req.params.movieId;
    const castId = req.body.cast;
    
       
    await movieService.attach(movie, castId)
    res.redirect(`/movies/${movie}/attach`);
});

router.get('/movies/:movieId/edit', async (req, res) => {
    //TODO: try catch block
    
    if (!req.user) {
        return res.redirect('/user/login');   
    }

    const movie = await movieService.getOne(req.params.movieId).lean();

    
    res.render('user/edit', { movie });
});
 
module.exports = router;