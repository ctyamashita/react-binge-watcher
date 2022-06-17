import React from 'react';

const MovieCard = (props) => {
  const { movie, detailsOmdb } = props;
  const details = document.querySelector('.details-container')


  const handleClick = () => {
    detailsOmdb(movie.imdbID)
    details.classList.remove('d-none')
  }

  return (
    <a href="#show-details">
      <div onClick={handleClick} className='card-poster' style={{backgroundImage: `url(${movie.Poster})`}}>
        <div className='card-poster-text'>
          <h5>{movie.Title}</h5>
          <small>{movie.Type} - {movie.Year}</small>
        </div>
      </div>
    </a>
  );
};

export default MovieCard;
