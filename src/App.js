import { useState } from 'react';
import './App.css';
import SearchMovies from './components/SearchMovies';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';

// import AttributeList from './components/AttributeList';
// <AttributeList />

// OMDB key API
// eb86ca7

const API_URL = "http://www.omdbapi.com?apikey=eb86ca7";

const App = () => {
  const [movies, setMovies] = useState();
  const [selectedMovie, setSelectedMovie] = useState()
  const [keyURL, setKeyURL] = useState('')

  const searchOmdbAPI = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    if (data) {
      setMovies(data.Search);
    }
  }

  const detailsOmdb = async (key) => {
    const response = await fetch(`${API_URL}&i=${key}`);
    const data = await response.json();
    if (data) {
      setSelectedMovie(data);
      setKeyURL(key);
    }
  }

  const clear = () => {
    const input = document.querySelector("#search")
    const details = document.querySelector('.details-container')
    input.value = '';
    setSelectedMovie();
    setMovies();
    details.classList.add('d-none')
  }

  return (
    <div className="main-grid" id='top'>
      <div className='d-flex align-items-center flex-column'>
        <div className='col-10'>
          <h1 className='text-white'><i className="fas fa-couch mt-5"></i> Binge-Watcher</h1>
          <hr className='text-white' />
          <SearchMovies searchOmdbAPI={searchOmdbAPI} />
          <MovieList movies={movies} setSelectedMovie={setSelectedMovie} detailsOmdb={detailsOmdb} />
        </div>
      </div>
      <div className='details-container d-none' id='show-details'>
        { selectedMovie ? <MovieDetails movie={selectedMovie} keyURL={keyURL} clear={clear} /> : '' }
      </div>
      <small className='watermark'> This page was created by <a className='text-decoration-none' href="https://github.com/ctyamashita" target='_blank' rel="noreferrer">Celso Yamashita</a></small>
    </div>
  );
}

export default App;
