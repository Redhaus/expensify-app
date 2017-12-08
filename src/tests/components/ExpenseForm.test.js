import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('TEST RENDERS EXPENSE FORM', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
})

test('TEST EXPENSE FORM WITH DATA', ()=> {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]}/>);
    expect(wrapper).toMatchSnapshot();

})

test('RENDER ERROR FOR INVALD SUBMITION', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
})

test('TEST DESCRIPTION CHANGE', () => {
    const value = 'New Description'
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    })
    expect(wrapper.state('description')).toBe( value );
})

test('TEST NOTE CHANGE', () => {
    const value = 'New NOTE Description'
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('textarea').simulate('change', {
        target: { value }
    })
    expect(wrapper.state('note')).toBe( value );
})

test('TEST VALID AMOUNT', () => {
    const value = '12.10';
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('input').at(1).simulate('change',{
        target: {value}

    })
    expect(wrapper.state('amount')).toBe( value );
})

test('TEST INVALID AMOUNT', () => {
    const value = '12.101';
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('input').at(1).simulate('change',{
        target: {value}

    })
    expect(wrapper.state('amount')).toBe( '' );
})

test('TEST VALID FORM SUBMISSION', () => {
    const onSubmitSpy = jest.fn();
    const exp = expenses[1]
    const wrapper = shallow(<ExpenseForm expense={exp} onSubmit={onSubmitSpy}/>)
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: exp.description,
        amount: exp.amount,
        createdAt: exp.createdAt,
        note: exp.note

    })
   
})

test('TEST SET NEW DATE CHANGE', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm/>)
    //find prop function then call it passing in var focused
    
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
})

test('SHOULD SET CALENDAR FOCUS', () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm/>)
    //find prop function then call it passing in var focused
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused})
    expect(wrapper.state('calFocused')).toEqual(focused);

})

// if valid input in amount
// invalid amount