import React from 'react';

import './Search.css';

const imgURL = "https://image.tmdb.org/t/p/w500";
// backdrop_path

const Search = (props) => {
    let resultList = null

    resultList = (
        <ul className="results">
            {props.results.map(item => (
                <li key={item.imdbID} onClick={() => props.clicked(item)}>
                    <img src={imgURL+ item.poster_path} alt="Movie Poster"/>
                    
                    {item.Title}
                </li>
            ))}
        </ul>
    )

    // if (props.searching && (props.defaultTitle !== '')) {
        
    // }

    return (
        <div className="search">
            {resultList}
        </div>
    );
};

export default Search;