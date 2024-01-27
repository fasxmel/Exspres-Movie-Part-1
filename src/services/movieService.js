const Movie = require('../models/movie');


exports.getAll = async () => {
   let movies = await Movie.find().lean();

   return movies;
}

exports.getOne = (movieId) => {
    const movie =  result.find(movie => movie._id == movieId);
   
   return movie;
}

exports.search = (title, genre, year) => {
    let result =  movies.slice();
   
   if (title) {
    result = result.filter(movie => movie.title.toLocaleLowerCase().includes(title.toLocaleLowerCase())); 
   }

   if (genre) {
    result = result.filter(movie => movie.genre.toLocaleLowerCase() === genre.toLocaleLowerCase()); 
   }

   if (year) {
    result = result.filter(movie => movie.year === year); 
   }

   return result;
}

exports.create = async (movieData) => {
   return await Movie.create(movieData);
}



