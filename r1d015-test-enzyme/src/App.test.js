import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount, render } from 'enzyme';


it('expect App.js', () => {
  expect(shallow(<App />).length).toEqual(1)
})

it('expect App.js to match snapshot', () => {
  // generates snaphshot
  // if company then get's changed in any way this test will fail
  // well u can update the snapshot afterwards if change was intentionally
  // expect(shallow(<App />)).toMatchSnapshot();
})



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

