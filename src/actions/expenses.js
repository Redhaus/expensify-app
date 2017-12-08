import uuid from 'uuid';

// ACTIONS

// ADD_EXPENSE
// create an action generator with implicit return,  creating a const with deconstructred items and their 
// defaults 
// this action has type of ADDEXPENSE 
// With data sent as expense, found under action.expense in reducer
// this action accepts an object as params
export const addExpense = ( 
    {
        description = '', 
        note = '', 
        amount = 0, 
        createdAt = 0 
    } = {} 
) => ({
    type: 'ADD_EXPENSE',
    expense:{
        id: uuid(),
        description: description,
        note: note, 
        amount: amount,
        createdAt: createdAt

    }
})





// REMOVE_EXPENSE
// Set up the action generator
export const removeExpense = ( { id } = {} ) => ({
    type: 'REMOVE_EXPENSE',
    id: id
    
})



// EDIT_EXPENSE

export const editExpense  = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id: id,
    updates: updates


})