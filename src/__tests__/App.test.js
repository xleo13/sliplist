import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { mount } from 'enzyme'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it("links to location index", ()=>{
  const app = mount(<App />)
  app.find('a#locations-link').simulate('click', {button: 0})
  expect(app.find('.subtitle').text()).toEqual('Locations')
})

it("renders a sign up form", ()=>{
  const app = mount(<App />)
  expect(app.find('.subtitle').text()).toEqual('Locations')
})
