import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';
import moment from 'moment';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
      <ExpenseListFilters
        filters={filters}
        setTextFilter={setTextFilter}
        sortByDate={sortByDate}
        sortByAmount={sortByAmount}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
      />
    );
  });

test('TEST RENDER SNAPSHOT', () => {
    expect(wrapper).toMatchSnapshot();
})

test('TEST RENDER ALT FILTERS', () => {
    wrapper.setProps({
        filters: altFilters
    })
    expect(wrapper).toMatchSnapshot();
})

test('SHOULD HANDLE TEXT CHANGE', () => {
    
    const value = 'rent'
    wrapper.find('input').simulate('change', {
        target:{
            value: value
        }
    });
    expect(setTextFilter).toHaveBeenCalledWith(value);
})

test('SHOULD SORT BY DATE', () => {
    const value = 'date'
    wrapper.setProps({
        filters: altFilters
    })
    wrapper.find('select').simulate('change', {
        target:{
            value: value
        }
    })
    expect(sortByDate).toHaveBeenCalled();
    
})

test('SHOULD SORT BY AMOUNT', () => {

    const value = 'amount'
   
    wrapper.find('select').simulate('change', {
        target:{
            value: value
        }
    })
    expect(sortByAmount).toHaveBeenCalled();


})

test('SHOULD HANDLE DATE CHANGE', () => {
    const startDate = moment(0).add(4, 'years')
    const endDate = moment(0).add(8, 'years')

    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate})
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
    
    
})

test('SHOULD HANDLE FOCUS CHANGE', () => {

    const calendarFocused = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused)
})
