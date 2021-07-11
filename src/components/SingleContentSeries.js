import React from 'react'
import "../css/series.css";
import SeriesDetail from '../Pages/SeriesDetail';

const singleContentSeries = ({ id, Title, Year, Poster,backdrop_path }) => {
    return (
        <SeriesDetail id={id}>
        <div>
            <div className="movieposter">
                <img src={`${Poster}`} alt="series poster" />
            </div>
        </div>
        </SeriesDetail>
    )
}

export default singleContentSeries
