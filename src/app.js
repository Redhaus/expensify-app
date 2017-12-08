
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';



// store is created from combined reducers return 
const store = configureStore();

store.dispatch( addExpense({ amount: 10000, description: 'Water Bill', note: 'PAID'}) )
store.dispatch( addExpense( {description: 'Gas Bill', amount: 5000, note: 'PAST DUE', createdAt: 1000} ))
store.dispatch( addExpense({ amount: 10095, description: 'Rent', note: 'PAID'}) )

// store.dispatch( setTextFilter('water') );

console.log(store.getState(), 'store');

const state = store.getState();
// console.log(getVisibleExpenses(state.expenses, state.filter));
    

// Provider component allows us to provide the store to all of the components that make up the application
// Takes one prop and that that is the store 

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)
ReactDOM.render( jsx , document.getElementById('app'));
    
    
    
    
