const router = require('express').Router();
const movieService = require('../services/movieService');
const castService = require('../services/castService');
const { isAuth } = require('../middlewares/authMiddlewares');

router.get('/create', isAuth, (req, res) => {
    res.render('create')
});

router.post('/create', isAuth, async (req, res) => {
   const newMovie = {
       ...req.body,
       owner: req.user._id
    };
   
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
    const isOwner = movie.owner == req.user._id;
   
     //TODO: stars functionality
        movie.ratingStars = '&#x2605;'.repeat(movie.rating);
        res.render('user/details', { movie, isOwner });
     
});

router.get('/movies/:movieId/attach', isAuth, async (req, res) => {
    //TODO: try catch block
     const movie = await movieService.getOne(req.params.movieId).lean();
     const casts = await castService.getAll().lean();
     //TODO: remove exsistent cast from movie

     res.render('cast/attach', { ...movie, casts});
});

router.post('/movies/:movieId/attach', isAuth, async (req, res) => {
    //TODO: try catch block
    const movie = req.params.movieId;
    const castId = req.body.cast;
    
       
    await movieService.attach(movie, castId)
    res.redirect(`/movies/${movie}/attach`);
});

router.get('/movies/:movieId/edit', isAuth, async (req, res) => {
//TODO: try catch block   
const movie = await movieService.getOne(req.params.movieId).lean();
   
res.render('user/edit', { movie });
});
 
module.exports = router;