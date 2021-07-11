import "../css/Trending.css";
import React, { useState, useEffect } from 'react';
import SingleContent from '../components/SingleContent';
import SingleContentSeries from '../components/SingleContentSeries';

const Trending = () => {
  const [trendingMovie, setTrendingMovie] = useState([]);
  const [trendingSeries, setTrendingSeries] = useState([]);

  useEffect(() => {
    fetch(" https://mighty-depths-20004.herokuapp.com/trendingMovie")
      .then((res) => {
        return res.json()
      })
      .then(json => {
        setTrendingMovie(json);
      })
      .catch((err) => {
        console.log(`Error ${err} `);
      })
  }, [])

  useEffect(() => {
    fetch(" https://mighty-depths-20004.herokuapp.com/trendingSeries")
      .then((res) => {
        return res.json()
      })
      .then(json => {
        setTrendingSeries(json);
      })
      .catch((err) => {
        console.log(`Error ${err} `);
      })
  }, [])

  return (
    <div>
      <span className="pageTitle">Trending Today</span>
      <h1>Trending Movies</h1>

      <div className="trending">
        {

          trendingMovie && trendingMovie.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              Title={c.Title}
              Year={c.Year}
              Poster={c.Poster}
              overview={c.overview}
              release_date={c.release_date}
              backdrop_path={c.backdrop_path}
            />
          ))}
      </div>
      <hr/>
      <div className="Banner">
        <img src="https://images2.vudu.com/assets/row/banner/191888-1305" alt="Movie banner"/>
        <hr/>
        </div>

      <h1>Trending Tv Shows</h1>
      <div className="trending">
        {
          trendingSeries && trendingSeries.map((c) => (
            <SingleContentSeries
              key={c.id}
              id={c.id}
              Title={c.Title}
              Year={c.Year}
              Poster={c.Poster}
              overview={c.overview}
              release_date={c.release_date}
              backdrop_path={c.backdrop_path}
            />
          ))}
      </div>
      <div className="Banner">
        <hr/>
        <img src="https://images2.vudu.com/assets/row/banner/191891-1305" alt="content banner"/>
        <hr/>
      </div>
    </div>
  );
};

export default Trending;
