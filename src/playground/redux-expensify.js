import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';


// Process for redux, 

// 1. Call the action with params as needed
// 2. Set up the action generator with  type and send data needed
// 3. Build the reducer to handle the action condition and manipulation 
// 4. Combine reducers 


// DATABASE STRUCTURE DEMO

// Data structure demo for state, an array of expenses
// expenses is an array of objects and filter with props
// mimics what the database looks like
const demo = {
    expenses: [{
        id: 'asdfasdfw',
        description: 'January Rent',
        note: 'This is rent payment',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined, 
        endDate: undefined
    }

};



// ACTIONS

// ADD_EXPENSE
// create an action generator with implicit return,  creating a const with deconstructred items and their 
// defaults 
// this action has type of ADDEXPENSE 
// With data sent as expense, found under action.expense in reducer
// this action accepts an object as params
const addExpense = ( 
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
const removeExpense = ( { id } = {} ) => ({
    type: 'REMOVE_EXPENSE',
    id: id
    
})



// EDIT_EXPENSE

const editExpense  = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id: id,
    updates: updates


})
// SET_TEXT_FILTER

const setTextFilter = ( text = '') => ({
    type: 'SET_TEXT',
    text: text


})



// SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_DATE',
    sort: 'date'
})


// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_AMOUNT',
    sort: 'amount'
})


// SET_START_DATE

const setStartDate = (date = undefined) => ({
    type: 'SET_START_DATE',
    date: date
})

// SET_END_DATE
const setEndDate = (date = undefined) => ({
    type: 'SET_END_DATE',
    date: date

})


// REDUCERS


// default setup for initial value of state
const expensesReducerDefaultState = []

// Expenses Reducer
// reducer accepts state you define and action 
// Add_expense will return new array of existing state plus expense from action function

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type){
        case 'ADD_EXPENSE':
            return [...state, action.expense]
//filter through every item in array, if items id, does not = action expense id 
// keep it in the array, if it matches remove item in array
        case 'REMOVE_EXPENSE':
            // console.log(action.expense.id);
            return state.filter( (item) => item.id !== action.id )
        case 'EDIT_EXPENSE':
            ///map through every item in state
            // if item.id matches the action.id 
            // spread out item with match id overwrite with updates 
            return state.map( (item) => {
                if(item.id === action.id){
                    return {
                        ...item, 
                        ...action.updates
                        
                    }

                }else{
                    return expense
                }
            } )
        default:
            return state;
    }
}

// Filter reducer set up default State for that reducer
const filterDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined, 
    endDate: undefined
}
// Filters Reducer
const filterReducer = (state = filterDefaultState, action) => {

    switch (action.type) {
        case 'SET_TEXT':
            return { ...state, text: action.text }
        case 'SORT_DATE':
            return { ...state, sortBy: action.sort}
        case 'SORT_AMOUNT':
            return { ...state, sortBy: action.sort}
        case 'SET_START_DATE':
            return { ...state, startDate: action.date}
        case 'SET_END_DATE':
            return { ...state, endDate: action.date}
            
        default:
            return state;
    }

}

// timestamps (milliseconds)
// Jan 1st 1970 (unix epoch)
// positive numbers are forward, neg numbrs and before that

// GET VISIBLE EXPENSES
// set up visible function that accepts expenses and filter objects
// deconstruct filter object 
// filter tthrough each expense 
// create a const for major filters start, end and text

// If all are true that object item remains in filter
// If any test is not true it is removed

// startDateMatch is test to see if provided if not provided it is undefined 
// and come back true

// If it is defined check to see if it comes after created by date
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter( (expense) => {

        // set up a expense description to lowercase and assign as var
        const description = expense.description.toLowerCase();
        // set search term to lower case for comparison
        const search = text.toLowerCase();
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = description.includes(search); // if this returns true with other two result is gathered.

        return startDateMatch && endDateMatch && textMatch

    // sort will always be a defaulted filter option to date or amount
    // so chain the sort function onto the filter function and returns 
    // each item is compared and evaluated to be up in order
    }).sort( (a,b) => {
        if(sortBy==='date'){
            return a.createdAt < b.createdAt ? 1 : -1
        }else{
            console.log('sort called');
            
            return a.amount < b.amount ? 1 : -1
        }
    });
}



// inclues js
// convert both strings to lowercase 

// COMBINE REDUCERS AND LISTEN FOR CHANGES



const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filter: filterReducer
    })
);

// create a state var of the redux store. 
// so state and expenses can be added to function above
store.subscribe( () => {
    const state = store.getState();
    // console.log(state.filter);
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filter)
    console.log(visibleExpenses);
})



// USER INTERACTION


// This is a mock event where object data would come from user 
const expOne = store.dispatch(addExpense({ description:'rent', amount: 100, createdAt: -21000}))
const expTwo = store.dispatch(addExpense({ description:'coffee', amount: 300, createdAt: -100}))
// console.log(expOne.expense.id);
// store.dispatch(removeExpense( {id: expOne.expense.id} ))


// const state = store.getState();
// console.log(store.getState());
// console.log(state.filter.sortBy);

// Interaction that passes expense id and update amount change
// store.dispatch(editExpense(expTwo.expense.id, { amount:500, description:'cake' }))
// store.dispatch(setTextFilter('e'));
// store.dispatch(setTextFilter());
store.dispatch(sortByAmount()) // amount
// store.dispatch(sortByDate()) // date

// store.dispatch(setTextFilter(''));
// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());

// store.dispatch(setEndDate(1250))
// store.dispatch(setEndDate())
