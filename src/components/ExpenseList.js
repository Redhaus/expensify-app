

import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
import ExpenseListFilters from './ExpenseListFilters';

// map through number of expenses and display expenseListItem passing unique ID and spread expense object
export const ExpenseList = (props) => (
    <div>
       
        <ExpenseListFilters />
        
        
        {
            props.expenses.length === 0 ? (
                <p>No Expenses</p>
            ) : (
                props.expenses.map( (expense) => {
                    return <ExpenseListItem key={expense.id} {...expense} />     
                })
            )
        }
        

   
        
    </div>
)



// makes redux store / state to various props
// return what you want from the state and then access it via props
// define items we want to get off redux state
// i.e. props.expenses and props.filters
// using select expenses you are adding filtering into expenses props object
const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

// const for HOC similar, connect returns a function, 
// like the function we created for HOC's pass connect return the component
// supply defined items you want as props, and provide wrapped component
export default connect(mapStateToProps)(ExpenseList);
