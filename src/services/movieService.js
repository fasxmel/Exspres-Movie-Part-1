const movies = [

    {
        _id: 1,
        title: 'The Beekeeper',
        genre: 'Action',
        director: 'David Ayer',
        year: '2023',
        imageUrl:'https://resizing.flixster.com/G2ypcmeD3YeumP2nvKiEmO5XQok=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2Y5MmJmNTk0LTFjNGEtNDVhNC1iNjI3LTFmNTVhYjg1ODc5Yy5qcGc=',
        rating: '8.5',
        description: "One man's brutal campaign for vengeance takes on national stakes after he is revealed to be a former operative of a powerful and clandestine organization known as Beekeepers."

    }

];


exports.getAll = () => {
    return movies.slice();
}

exports.create = (movieData) => {
    movieData._id = movies[movies.length - 1]._id + 1;

     movies.push(movieData);
}

