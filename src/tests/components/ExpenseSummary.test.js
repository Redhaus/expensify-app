import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import {ExpenseSummary} from '../../components/ExpensesSummary';
import React from 'react';




test('TEST NO EXPENSE', () => {
    const wrapper = shallow(<ExpenseSummary/>);
    expect(wrapper).toMatchSnapshot(); 
})

test('TEST MULTIPLE EXPENSE', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={2} expenseTotal={345}/>);
    expect(wrapper).toMatchSnapshot(); 
})

