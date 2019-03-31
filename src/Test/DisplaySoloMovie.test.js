import React from 'react';
import DisplaySoloMovie from '../Modules/containers/DisplaySoloMovie/DisplaySoloMovie';
import { configure, mount, shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


const movieId = "166428";




describe('DisplaySoloMovie', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<DisplaySoloMovie movieId={movieId} debug/>);
    expect(component).toMatchSnapshot();
  });
});

it('should render correctly with no props', () => {
  const component = shallow(<DisplaySoloMovie/>);
  expect(component).toMatchSnapshot();
});

it('should render correctly with props', () => {
  const component = shallow(<DisplaySoloMovie movieId={movieId}/>);
  expect(component).toMatchSnapshot();
});