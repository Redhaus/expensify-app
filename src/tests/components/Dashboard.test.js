import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from '../../components/Dashboard';

test('TEST DASHBOARD', () => {
    const wrapper = shallow(<Dashboard/>);
    expect(wrapper).toMatchSnapshot();
})