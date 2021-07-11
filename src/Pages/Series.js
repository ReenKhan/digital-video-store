import React, { useState, useEffect } from 'react';
import "../css/series.css";
import SingleContentSeries from '../components/SingleContentSeries';

const Series = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    fetch("/series")
      .then((res) => {
        return res.json()
      })
      .then(json => {
        setSeries(json);
      })
      .catch((err) => {
        console.log(`Error ${err} `);
      })
  }, [])





  return (
    <div>
      <span className="pageTitle">Discover Series</span>
      <div className="series">
        {

          series && series.map((c) => (
            <SingleContentSeries
              key={c.id}
              id={c.id}
              Title={c.Title}
              Year={c.Year}
              Buy={c.Buy}
              Poster={c.Poster}
              overview={c.overview}
              release_date={c.release_date}
              backdrop_path={c.backdrop_path}
            />
          ))}
      </div>
    </div>
  );
};

export default Series;
