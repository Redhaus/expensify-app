import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';


test('TEST DEFAULT STATE', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
})

test('TEST REMOVE EXPENSE BY ID', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
})

test('TEST DOESNT REMOVE EXPENSE BY NO ID', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: -1
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
})

test('TEST ADD EXPENSE', () => {
    const expense = {
        id: '109',
        description: 'New',
        note: '',
        amount: 4195,
        createdAt: 140
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense: expense
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
})

test('TEST EDIT EXPENSE', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            note: 'This is note update'
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state[0].note).toBe('This is note update')
})

test('TEST NOT EDIT EXPENSE NO ID', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: -1,
        updates: {
            note: 'This is note update'
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
})

// should add expense
// should edit expense 
// should not edit expense if not found