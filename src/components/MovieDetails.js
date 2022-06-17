import React from 'react';
import StarRating from './StarRating';

const MovieDetails = (props) => {
  const { movie, keyURL, clear } = props;

  return (
    <div>
      <div className='d-flex justify-content-center'>
        <img className='image-show' src={movie.Poster} alt={movie.Title} />
      </div>
      <hr />
      <h3>{movie.Title}</h3>
      <div className='d-flex align-items-center justify-content-between'>
        <div className='col-7'>
          <p className='m-0'>{movie.Year}</p>
          <small>{movie.Genre} - {movie.Runtime}</small>
        </div>
        <div className='justify-content-end'>
          <StarRating rating={movie.imdbRating} totalVotes={movie.imdbVotes}/>
        </div>
      </div>
      <hr />
      <strong>Plot:</strong>
      <p>{movie.Plot}</p>
      <hr />
      <small>
        <strong>Actors:</strong>
        <p>{movie.Actors}</p>
        <strong>Director:</strong>
        <p>{movie.Director}</p>
        <strong>Writer:</strong>
        <p>{movie.Writer}</p>
      </small>
      <hr />
      <div className='d-flex justify-content-between mt-4'>
        <a href="#top" className='btn btn-outline-light' onClick={clear}>New search</a>
        <a href={`https://www.imdb.com/title/${keyURL}`} target="_blank" rel="noreferrer" className='btn btn-warning'>Check IMBD page</a>
      </div>
    </div>
  );
};

export default MovieDetails;
