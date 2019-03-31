import React from 'react';

import { Row, Col, Image } from 'react-bootstrap';
import './RowMovies.css'

const imgURL = "https://image.tmdb.org/t/p/w500";
//backdrop_path

const RowMovies = (props) => {
    let resultList = null

    resultList = (props.rowData.map(soloMovie => {
        let rDate = soloMovie.release_date;
        var date = new Date(rDate);
        var elapsed = date.toLocaleDateString('en-us', { month: 'short', year: "numeric" });


        // let vAverage = parseFloat(soloMovie.vote_average);
        var average = soloMovie.vote_average * 10 + "%";

        let pickColor = (vAverage) => {
            if (vAverage >= 0 && vAverage < 2) {
                return "#FF1493";
            } else if (vAverage >= 2 && vAverage < 4) {
                return "#d1225b";
            } else if (vAverage >= 4 && vAverage < 6) {
                return "#4B0082";
            } else if (vAverage >= 6 && vAverage < 8) {
                return "#4902a3";
            } else if (vAverage >= 8 && vAverage < 10) {   
                return "#01d277";
            } else {
                return "#FF1493";
            }
        }
        let bgColor = pickColor(soloMovie.vote_average);

        let clickOnMovie = () => {
            props.clickMovie(soloMovie);
        }


        return <Col key={soloMovie.id} onClick={clickOnMovie}>
            <div className="info-vote" style={{ backgroundColor: bgColor }}><span>{average}</span></div>
            <div>
            <Image src={imgURL + soloMovie.poster_path} alt={soloMovie.title} fluid />
            </div>
            <div className="info-section movie-title">
                <span>{soloMovie.title}</span>
            </div>
            <div className="info-section movie-release">
                <span>{elapsed}</span>
            </div>
        </Col>
    }
    ))
    return (
        <Row className="movie-row">
            {resultList}
        </Row>
    );
};

export default RowMovies;