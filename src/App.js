import React, { Component } from 'react';
import './App.css';
import DisplayMovies from './Modules/containers/DisplayMovies/DisplayMovies';
import DisplaySoloMovie from './Modules/containers/DisplaySoloMovie/DisplaySoloMovie';

import history from './History';
class App extends Component {

  state = {
    inputData : null,
    soloMovie : false
  }

  clickOnMovieForDetial = (item) => {
    console.log(history.location);
    this.setState({soloMovie:true, inputData : item.id});
  }

  backToMain=()=>{
    let location = history.location;
    this.setState({soloMovie:false, inputData : location.state});
    console.log(location.state);
  }

  render() {
    if(this.state.soloMovie){
      return (<DisplaySoloMovie movieId={this.state.inputData} backToMain={this.backToMain}/>);
    }else{
      return (<DisplayMovies itemClicked = {this.clickOnMovieForDetial} inputData={this.state.inputData}/>);
    }
  }
}

export default App;
