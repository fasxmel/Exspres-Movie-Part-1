const Movie = require('../models/movie');

exports.getAll = () => {
   let movies =  Movie.find();

   return movies; 
}

exports.getOne = (movieId) => Movie.findById(movieId).populate('casts');


exports.search = async (title, genre, year) => {
   // TODO: try catch block
    let movies = await Movie.find().lean();
   // TODO: must be filtred on mongoDB
   if (title) {
    movies = movies.filter(movie => movie.title.includes(title)); 
   }

   if (genre) {
    movies = movies.filter(movie => movie.genre === genre); 
   }

   if (year) {
    movies = movies.filter(movie => movie.year === year); 
   }
  
return movies;
}

exports.create = (movieData) => {
   return Movie.create(movieData);
}

exports.attach = (movieId, castId) => {
   //TODO: try catch block en validate castId is exsisten;
   //TODO: validate castId is exsisten on DB;

//   await this.getOne(movieId, castId);
//   move.casts.push(castId);
//   return move.save();

return Movie.findByIdAndUpdate(movieId, {$push: { casts: castId } });
}



