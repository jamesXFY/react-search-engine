import React, { Component } from 'react';

// import SoloMovie from '../../components/SoloMovieComponent/SoloMovie';

import MovieList from "../../components/MovieListComponent/MovieList";
import { Container, Row, Col } from 'react-bootstrap';
import "./DisplayMovies.css"

import history from '../../../History';


const endPointProps = {
    apiKey: "6ed12e064b90ae1290fa326ce9e790ff",
    apiURL: "https://api.themoviedb.org/3"
}


class DisplayMovies extends Component {
    state = {
        movieId: '',
        title: '',
        movie: {},
        searchResults: this.props.inputData && this.props.inputData.searchResults ? this.props.inputData.searchResults : [],
        isLoading: true,
    }

    componentDidMount() {
        console.info(this.state.searchResults, this.props.inputData);
        if (this.state.searchResults.length === 0) {
            this.loadMovie()
        }else
        {
            this.setState({isLoading:false});
        }
    }

    componentDidUpdate(prevProps, prevState) {
    }

    loadMovie() {
        fetch(endPointProps.apiURL + '/movie/popular?api_key=' + endPointProps.apiKey)
            .then(res => res.json())
            .then(
                (results) => {
                    history.push("mainPage", this.state);
                    this.setState({ searchResults: results.results, isLoading : false});
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    console.info(error);
                }
            )
    }

    // we use a timeout to prevent the api request to fire immediately as we type
    timeout = null;

    searchMovie = (event) => {
        if (event.target.value) {
            this.setState({ title: event.target.value, isLoading: true })
            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                fetch(endPointProps.apiURL + '/search/movie?api_key=' + endPointProps.apiKey + '&language=en-US&page=1&query=' + this.state.title)
                    .then(res => res.json())
                    .then(
                        (results) => {
                            history.push("mainPage", this.state);
                            this.setState({ searchResults: results.results, isLoading : false});
                        },
                        (error) => {
                            console.info(error);
                        })
            }, 1000)
        } else {
            this.loadMovie();
        }
    }

    // event handler for a search result item that is clicked
    itemClicked = (item) => {
        history.push("mainPage", this.state);
        this.props.itemClicked(item);
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <div className="md-form mt-5 mb-5">
                            <input className="form-control" type="text" placeholder="Search" aria-label="Search" onChange={this.searchMovie} />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="resultContent">
                        {this.state.isLoading ? 
                                <div class="spinner-border text-primary movie-loading" role="status">
                                    <span class="sr-only">Loading...</span>
                                </div> 
                                : 
                                <MovieList
                                defaultTitle={this.state.title}
                                search={this.searchMovie}
                                results={this.state.searchResults}
                                clickMovie={this.itemClicked} />}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default DisplayMovies;