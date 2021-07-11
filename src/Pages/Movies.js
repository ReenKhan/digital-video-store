import React, { useState, useEffect } from 'react';
import "../css/movies.css";
import SingleContent from '../components/SingleContent';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // fetch(" http://localhost:5000/movies")
    fetch("/movies")
      .then((res) => {
        return res.json()
      })
      .then(json => {
        setMovies(json);
      })
      .catch((err) => {
        console.log(`Error ${err} `);
      })
  }, [])
  
  return (
    <div>
      <span className="pageTitle">Discover Movies</span>
      <div className="movies">
        {

          movies && movies.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              Title={c.Title}
              Year={c.Year}
              Rent={c.Rent}
              Buy={c.Buy}
              Poster={c.Poster}
              overview={c.overview}
              backdrop_path={c.backdrop_path}
            />
          ))}
      </div>
    </div>
  );
};

export default Movies;
