import React from 'react'
import "../css/movies.css";
import MovieDetail from '../Pages/MovieDetail';

const singleContent = ({ id, Poster}) => {
    return (
        <MovieDetail id={id}>
        <div>
            <div className="movieposter">
                <img src={`${Poster}`} alt="movie poster" />
            </div>
        </div>
        </MovieDetail>
    )
}

export default singleContent
