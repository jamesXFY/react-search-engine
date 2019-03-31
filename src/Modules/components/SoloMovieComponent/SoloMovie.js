import React from 'react';

import './SoloMovie.css';

import { Image } from 'react-bootstrap';

const imgURL = "https://image.tmdb.org/t/p/w500";

const SoloMovie = (props) => {

    if(props.movie){
        let rDate = props.movie.release_date;
    var date = new Date(rDate);
    var elapsed = date.toLocaleDateString('en-us', { year: "numeric" });

    var average = props.movie.vote_average * 10 + "%";

    let backToMain=()=>{
        props.backToMain();
    }
    return (
            <div className="movie-card">
                <div className="movie-header" >
                    <svg viewBox="0 0 64 64" className="back-main" onClick={backToMain}>
                        <path d="M16 48 L20 48 L6 34 L32 34 L32 30 L6 30 L20 16 L16 16 L0 32 Z" />
                    </svg>
                    <div className="movie-bdIMG"><Image  src={imgURL + props.movie.backdrop_path} alt={props.movie.title} fluid rounded />
                    </div>
                    <div className="movie-potIMG">
                    <Image src={imgURL + props.movie.poster_path} alt={props.movie.title} fluid rounded />
                    </div>
                    <div className="movie-content-header">
                        <h3 className="movie-title">{props.movie.title}</h3>
                    </div>
                    <div className="movie-info">
                        <div className="info-section">
                            <span>{elapsed}
                                <svg height="10" width="10">
                                    <circle className="info-splitPoint" cx="5.5" cy="4.5" r="1.5" />
                                </svg>
                                {average}</span>
                        </div>

                    </div>
                    <div className="movie-info">
                        <div className="info-section">
                            <span>{props.movie.runtime}</span>
                        </div>

                    </div>

                </div>
                <div className="movie-content">
                    <div className="plot">
                        <label>Overview</label>
                        <p style={{ fontSize: '12px', color: '#9fbbc7' }}>{props.movie.overview}</p>
                    </div>
                </div>
            </div>
    );
    }else
    {
        return <div></div>
    }
    
};

export default SoloMovie;