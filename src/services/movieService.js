const Movie = require('../models/movie');


exports.getAll = () => {
   let movies =  Movie.find();

   return movies; 
}

exports.getOne = (movieId) => {
   const movie = Movie.findById(movieId);

   return movie; 
}

exports.search = async (movieData) => {
   // TODO: try catch block
    let result = await Movie.find().lean();
   // TODO: must be filtred on mongoDB
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

exports.create = (movieData) => {
   return Movie.create(movieData);
}



