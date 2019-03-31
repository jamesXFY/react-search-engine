import React, { Component } from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import SoloMovie from '../../components/SoloMovieComponent/SoloMovie';

import './DisplaySoloMovie.css'


const endPointProps = {
    apiKey: "6ed12e064b90ae1290fa326ce9e790ff",
    apiURL: "https://api.themoviedb.org/3"
}


class DisplaySoloMovie extends Component {
    state = {
        movieId: '',
        title: '',
        movie: {},
        isLoading: true,
    }

    componentDidMount() {
        if(this.props.movieId){
            this.loadMovie();
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.movieId !== this.state.movieId) {
            this.loadMovie();
        }
    }

    // we use a timeout to prevent the api request to fire immediately as we type
    timeout = null;

    loadMovie = () => {
        this.setState({ movieId: this.props.movieId })
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            fetch(endPointProps.apiURL + '/movie/' + this.props.movieId + '?api_key=' + endPointProps.apiKey + '&language=en-US')
                .then(res => res.json())
                .then(
                    (result) => {
                        console.info(result);
                        this.setState({ movie: result, isLoading: false });
                        console.info(this.state);
                    },
                    (error) => {
                        console.info(error);
                    }
                )
        }, 1000)
    }

    backToMain = () => {
        this.props.backToMain();
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col className="soloMovieContainer">
                        {this.state.isLoading && this.props.movieId ?
                            <div class="spinner-border text-primary movie-loading" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                            :
                            <SoloMovie movie={this.state.movie} backToMain={this.backToMain}></SoloMovie>
                        }
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default DisplaySoloMovie;