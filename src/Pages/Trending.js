import "../css/Trending.css";
import React from 'react';
import SingleContent from '../components/SingleContent';
import SingleContentSeries from '../components/SingleContentSeries';
import MovieContext from "../components/MovieContext";
import { useContext } from 'react';

export default function Trending()  {
  const {trendingMovies, setTrendingMovies} =  useContext(MovieContext);
  const {trendingSeries, setTrendingSeries} =  useContext(MovieContext);


  return (
    <div>
      <span className="pageTitle">Trending Today</span>
      <h1>Trending Movies</h1>
 
      <div className="trending">
        {
         
          trendingMovies && trendingMovies.map((c) => (
            <SingleContent
            key={c.id}
            id={c.id}
            title={c.title}
            year={c.year}
            rent={c.rent}
            buy={c.buy}
            poster={c.poster}
            overview={c.overview}
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
            title={c.title}
            year={c.year}
            buy={c.buy}
            poster={c.poster}
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
