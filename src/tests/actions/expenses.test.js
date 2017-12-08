import {addExpense, editExpense, removeExpense} from '../../actions/expenses';


//setup test case
//call function
//make assertion of what result should be

// toBe === 
// toEqual matches objects and arrays

test('should setup remove expense action object', ()=> {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: "123abc"
    })
});

test('should setup edit expense action', () => {
    const action = editExpense( 'id123' ,{note: 'this is a note', amount: 100.00})
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'id123',
        updates: {
            note:'this is a note', 
            amount: 100.00
        }
    })
});

test('should setup add expense action with values', () => {

    const expenseData = {
        description: 'coffee',
        note: 'coffee note', 
        amount: 300,
        createdAt: 1000
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)

        }
    })

})

test('should setup add expense action with defaults', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense:  {
            description: '', 
            note: '', 
            amount: 0, 
            createdAt: 0,
            id: expect.any(String)
        
        },
    })
    
})
