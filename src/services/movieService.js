const Movie = require('../models/movie');

exports.getAll = () => {
   let movies =  Movie.find();

   return movies; 
}

exports.getOne = (movieId) => Movie.findById(movieId).populate('casts');


exports.search = async (data) => {
   let query = {}

    if (!data.title && !data.genre && !data.year) {
        
        return []
    }

    if (data.title) {
        query.title = data.title
    }

    if (data.genre) {
        query.genre = data.genre
    }

    if (data.year) {
        query.year = data.year
    }
    console.log(query)
    let searchedMovies = await Movie.find(query).lean()

   
    return searchedMovies
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



