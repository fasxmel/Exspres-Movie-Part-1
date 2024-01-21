const Movie = require('../models/movie');



// const movies = [

//     {
//         _id: 1,
//         title: 'The Beekeeper',
//         genre: 'Action',
//         director: 'David Ayer',
//         year: 2023,
//         imageUrl:'https://resizing.flixster.com/G2ypcmeD3YeumP2nvKiEmO5XQok=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2Y5MmJmNTk0LTFjNGEtNDVhNC1iNjI3LTFmNTVhYjg1ODc5Yy5qcGc=',
//         rating: '8.5',
//         description: "One man's brutal campaign for vengeance takes on national stakes after he is revealed to be a former operative of a powerful and clandestine organization known as Beekeepers."

//     }

// ];


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



exports.create = (movieData) => {
    movieData._id = movies[movies.length - 1]._id + 1;

     movies.push(movieData);
}



