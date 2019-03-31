import React from 'react';

import RowMovies from '../RowMoviesComponents/RowMovies';

import './MovieList.css';

const MovieList = (props) => {
    let resultList = null

    resultList = (
        
            props.results.map((item, index) => {
                if(index%2===0){
                    let rowArray = props.results.slice(index,index+2);
                    console.log(rowArray);
                    return <RowMovies key = {index/2} rowData = {rowArray} clickMovie={props.clickMovie}></RowMovies>
                }else
                {
                    return <div></div>
                }
            })
        
    )
    return (
        <div>
            <span className="title"> Popular Movies </span>
            {resultList}
        </div>
    );
};

export default MovieList;