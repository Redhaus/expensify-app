// react-test-renderer
import React from 'react';
import {shallow} from 'enzyme';
import Header from '../../components/Header';
// import toJson from 'enzyme-to-json';

test('RENDER HEADER CORRECTLY', ()=> {

    const wrapper = shallow(<Header/>);
    // expect(toJson(wrapper)).toMatchSnapshot();
    expect(wrapper).toMatchSnapshot();
    
    



    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />)
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
    // console.log(renderer.getRenderOutput());




    // expect(wrapper.find('h1').text()).toBe('Expensify');
})