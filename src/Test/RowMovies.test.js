import React from 'react';
import RowMovies from '../Modules/components/RowMoviesComponents/RowMovies';
import { configure, mount, shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });



const movieList = [{"vote_count":1185,"id":166428,"video":false,"vote_average":7.7,"title":"How to Train Your Dragon: The Hidden World","popularity":763.258,"poster_path":"/xvx4Yhf0DVH8G4LzNISpMfFBDy2.jpg","original_language":"en","original_title":"How to Train Your Dragon: The Hidden World","genre_ids":[16,10751,12],"backdrop_path":"/h3KN24PrOheHVYs9ypuOIdFBEpX.jpg","adult":false,"overview":"As Hiccup fulfills his dream of creating a peaceful dragon utopia, Toothless’ discovery of an untamed, elusive mate draws the Night Fury away. When danger mounts at home and Hiccup’s reign as village chief is tested, both dragon and rider must make impossible decisions to save their kind.","release_date":"2019-01-03"},{"vote_count":3119,"id":299537,"video":false,"vote_average":7.2,"title":"Captain Marvel","popularity":408.793,"poster_path":"/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg","original_language":"en","original_title":"Captain Marvel","genre_ids":[28,12,878],"backdrop_path":"/w2PMyoyLU22YvrGK3smVM9fW1jj.jpg","adult":false,"overview":"The story follows Carol Danvers as she becomes one of the universe’s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races. Set in the 1990s, Captain Marvel is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe.","release_date":"2019-03-06"}];



describe('RowMovies', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<RowMovies rowData={movieList} debug/>);
    expect(component).toMatchSnapshot();
  });
});


it('should render correctly with no props', () => {
    const component = shallow(<RowMovies/>);
    
    expect(component).toMatchSnapshot();
});

it('should render correctly with given props', () => {
    const component = shallow(<RowMovies rowData={movieList}/>);
    
    expect(component).toMatchSnapshot();
});