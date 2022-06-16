import React from 'react';

const SearchMovies = (props) => {


  const { searchOmdbAPI } = props;
  const handleChange = () => {
    // const details = document.querySelector('.details-container')
    const input = document.querySelector("#search")
    searchOmdbAPI(input.value);
    // if (!details.classList.contains('d-none')) {
    //   details.classList.add('d-none')
    // }
  }

  return (
    <form action="#" method='get' onSubmit={handleChange}>
      <div className="input-group my-5">
        <input type="text" className="form-control" placeholder="Search movies and series by title" aria-label="Search movies and series" aria-describedby="basic-addon2" id="search"/>
        <div className="input-group-append">
          <button className="btn btn-warning" type="submit"><i className="fas fa-search"></i></button>
        </div>
      </div>
    </form>
  );
};

export default SearchMovies;
