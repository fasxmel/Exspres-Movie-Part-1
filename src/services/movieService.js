const movies = [

    {
        title: 'The Beekeeper',
        genre: 'Action',
        director: 'David Ayer',
        year: '2023',
        imageUrl:'https://resizing.flixster.com/G2ypcmeD3YeumP2nvKiEmO5XQok=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2Y5MmJmNTk0LTFjNGEtNDVhNC1iNjI3LTFmNTVhYjg1ODc5Yy5qcGc=',
        rating: '8.5',
        discription: "One man's brutal campaign for vengeance takes on national stakes after he is revealed to be a former operative of a powerful and clandestine organization known as Beekeepers."

    }

];


exports.create = (movieData) => {
     movies.push(movieData);
}