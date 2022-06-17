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

const initialMovies = [
  {
      "Title": "Blade Runner",
      "Year": "1982",
      "imdbID": "tt0083658",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
  },
  {
      "Title": "Blade Runner 2049",
      "Year": "2017",
      "imdbID": "tt1856101",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_SX300.jpg"
  },
  {
      "Title": "Blade Runner: Black Out 2022",
      "Year": "2017",
      "imdbID": "tt7428594",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZGNiNmNiMTctMDI4OS00OWYxLWE4ZWEtZjFkZjU4ZmY5YzEyXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_SX300.jpg"
  },
  {
      "Title": "Blade Runner: Black Lotus",
      "Year": "2021–",
      "imdbID": "tt9359796",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYjVlOThlOWItNTNjOC00OTAyLWEyOTctOGE1NTgyYTJiMjljXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
  },
  {
      "Title": "Dangerous Days: Making Blade Runner",
      "Year": "2007",
      "imdbID": "tt1080585",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNzI2NjU0MjY4MF5BMl5BanBnXkFtZTgwMjM0NDQzNjE@._V1_SX300.jpg"
  },
  {
      "Title": "Blade Runner",
      "Year": "1997",
      "imdbID": "tt0126817",
      "Type": "game",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYWRkYjczZWMtN2Q5NS00YWFmLTk3M2MtNWUwNWRjYzdkMjZhXkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg"
  },
  {
      "Title": "Oscar Pistorius: Blade Runner Killer",
      "Year": "2017",
      "imdbID": "tt7445510",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZTYxZjU5YTgtN2NmOC00NmQ0LTk4MmEtYjc0YmI5MTI0ZDFhXkEyXkFqcGdeQXVyNTMzNDY2NzU@._V1_SX300.jpg"
  },
  {
      "Title": "On the Edge of 'Blade Runner'",
      "Year": "2000",
      "imdbID": "tt0281011",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMGRhY2RlMWYtOGQ4Yi00NmMxLWJiZDUtZmRkZjYzYWRlNmExXkEyXkFqcGdeQXVyMTQxNzE3ODA3._V1_SX300.jpg"
  },
  {
      "Title": "Blade Runner: Deleted and Alternate Scenes",
      "Year": "2007",
      "imdbID": "tt1165254",
      "Type": "movie",
      "Poster": "N/A"
  },
  {
      "Title": "Blade Runner",
      "Year": "2013",
      "imdbID": "tt2797762",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYmY5M2IwMTAtODgxOS00Y2EyLThhMjgtMTA5YmY2ODUyN2Q0XkEyXkFqcGdeQXVyNzMxMzYyOTI@._V1_SX300.jpg"
  }
];

const initialSelectedMovie = {
  "Title": "Blade Runner",
  "Year": "1982",
  "Rated": "R",
  "Released": "25 Jun 1982",
  "Runtime": "117 min",
  "Genre": "Action, Drama, Sci-Fi",
  "Director": "Ridley Scott",
  "Writer": "Hampton Fancher, David Webb Peoples, Philip K. Dick",
  "Actors": "Harrison Ford, Rutger Hauer, Sean Young",
  "Plot": "A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.",
  "Language": "Low German, English, German, Cantonese, Japanese, Hungarian, Arabic, Korean",
  "Country": "United States",
  "Awards": "Nominated for 2 Oscars. 12 wins & 19 nominations total",
  "Poster": "https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  "Ratings": [
      {
          "Source": "Internet Movie Database",
          "Value": "8.1/10"
      },
      {
          "Source": "Rotten Tomatoes",
          "Value": "89%"
      },
      {
          "Source": "Metacritic",
          "Value": "84/100"
      }
  ],
  "Metascore": "84",
  "imdbRating": "8.1",
  "imdbVotes": "750,069",
  "imdbID": "tt0083658",
  "Type": "movie",
  "DVD": "30 Oct 2001",
  "BoxOffice": "$32,914,489",
  "Production": "N/A",
  "Website": "N/A",
  "Response": "True"
};

const App = () => {
  const [movies, setMovies] = useState(initialMovies);
  const [selectedMovie, setSelectedMovie] = useState(initialSelectedMovie);
  const [keyURL, setKeyURL] = useState("tt0083658");

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
      <div className='details-container' id='show-details'>
        { selectedMovie ? <MovieDetails movie={selectedMovie} keyURL={keyURL} clear={clear} /> : '' }
      </div>
      <small className='watermark'> This page was created by <a className='text-decoration-none' href="https://github.com/ctyamashita" target='_blank' rel="noreferrer">Celso Yamashita</a></small>
    </div>
  );
}

export default App;
