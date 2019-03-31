import React from 'react';
import movieList from '../Modules/components/MovieListComponent/MovieList';
import { configure, mount, shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });



const movie = {"adult":false,"backdrop_path":"/h3KN24PrOheHVYs9ypuOIdFBEpX.jpg","belongs_to_collection":{"id":89137,"name":"How to Train Your Dragon Collection","poster_path":"/4tBKIkPLFMkiZETjAMOHNoty8B1.jpg","backdrop_path":"/vBSuGU5OyJ5lGamkqXo2kVAe01F.jpg"},"budget":129000000,"genres":[{"id":16,"name":"Animation"},{"id":10751,"name":"Family"},{"id":12,"name":"Adventure"}],"homepage":"https://www.howtotrainyourdragon.com/","id":166428,"imdb_id":"tt2386490","original_language":"en","original_title":"How to Train Your Dragon: The Hidden World","overview":"As Hiccup fulfills his dream of creating a peaceful dragon utopia, Toothless’ discovery of an untamed, elusive mate draws the Night Fury away. When danger mounts at home and Hiccup’s reign as village chief is tested, both dragon and rider must make impossible decisions to save their kind.","popularity":763.258,"poster_path":"/xvx4Yhf0DVH8G4LzNISpMfFBDy2.jpg","production_companies":[{"id":521,"logo_path":"/kP7t6RwGz2AvvTkvnI1uteEwHet.png","name":"DreamWorks Animation","origin_country":"US"},{"id":20154,"logo_path":null,"name":"Mad Hatter Entertainment","origin_country":"US"}],"production_countries":[{"iso_3166_1":"US","name":"United States of America"}],"release_date":"2019-01-03","revenue":375396270,"runtime":104,"spoken_languages":[{"iso_639_1":"en","name":"English"}],"status":"Released","tagline":"The friendship of a lifetime","title":"How to Train Your Dragon: The Hidden World","video":false,"vote_average":7.7,"vote_count":1174};



describe('movieList', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<movieList debug/>);
    expect(component).toMatchSnapshot();
  });
});


it('should render correctly with no props', () => {
    const component = shallow(<movieList/>);
    
    expect(component).toMatchSnapshot();
});

it('should render correctly with given props', () => {
    const component = shallow(<movieList movie={movie}/>);
    
    expect(component).toMatchSnapshot();
});