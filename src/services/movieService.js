const { move } = require('../controllers/movieController');
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

exports.attach = (movieId, castId) => {
   //TODO: try catch block en validate castId is exsisten;
   //TODO: validate castId is exsisten on DB;

//   await this.getOne(movieId, castId);
//   move.casts.push(castId);
//   return move.save();

return Movie.findByIdAndUpdate(movieId, {$push: { casts: castId } });
}



