import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount, render } from 'enzyme';
import MyComponent from './MyComponent';


it('expect myComponent.js to match snapshot', () => {
    // testing component has no access to props, so we need to mock them here
    //  const mockRobots = [ 'r1', 'r2' ];
    // expect(shallow(<MyComponent robots={mockRobots}/>)).toMatchSnapshot();
})

it('increments counter', () => {
    const mockRobots = [ 'r1', 'r2' ];
    const wrapper = shallow(<MyComponent robots={mockRobots}/>);
    wrapper.find('[id="button1"]').simulate('click')
    expect(wrapper.state()).toEqual({ button: 1 })
})



