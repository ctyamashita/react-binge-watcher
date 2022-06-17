import React from 'react';
import MovieCard from './MovieCard';

const MovieList = (props) => {
  const { movies, detailsOmdb } = props;

  if (movies) {
    return (
      <div className="cards">
        { movies.map((movie) => <MovieCard movie={ movie } key={ movie.imdbID } detailsOmdb={detailsOmdb} /> )}
      </div>
    );
  } else {
    return;
  }

};

export default MovieList;
