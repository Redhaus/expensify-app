import React from 'react';
import { shallow } from 'enzyme';
import { EditPage } from '../../components/EditExpense';
import expenses from '../fixtures/expenses';     

let editExpense, removeExpense, history, wrapper;

beforeEach( () => {
    editExpense = jest.fn();
    removeExpense= jest.fn();
    history = { push: jest.fn()}
    wrapper = shallow(
        <EditPage 
            editExpense={editExpense} 
            removeExpense={removeExpense}
            history={history}
            expense={expenses[2]}    
        />)
})

test('TEST EDIT RENDER', () => {
    expect(wrapper).toMatchSnapshot();
})

test('HANDLE EDIT EXPENSE', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2])
})

test('HANDLE REMOVE EXPENSE', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(removeExpense).toHaveBeenLastCalledWith({
        id: expenses[2].id
    })

})