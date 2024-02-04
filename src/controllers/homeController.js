const router = require('express').Router();
const movieService = require('../services/movieService')

router.get('/', async (req, res) => {
    try {
        const movies = await  movieService.getAll().lean();
        res.render('home', { movies })
    } catch (error) {
        console.error(error);
        res.render('error')
    }
    
});

router.get('/about', (req, res) => {
    
res.render('about');
});

router.get("/search", async (req, res) => {
const movies = await movieService.getAll().lean()
res.render("search", { movies })
});

router.post('/search', async (req, res) => {
 //const movies = await movieService.getAll().lean();
// const { title, genre, year } = req.body;
// const moviesResult = await movieService.search( title, genre, year );
// console.log(title, genre, year);

let movies = await movieService.search(req.body);
console.log(movies)
res.render('search', { movies });
});

router.get('/404', (req, res) => {
    
 res.render('404');
});

module.exports = router;