// Create a summary component

// rendered by ExpenseDashboard Page
// Test with two snapshots
// Connected to store for:
//     expenseCount - how many visible expenses - selector
//     expensesTotal - whats the total of visible expenses - selector


// tests 
// Example viewing 2 expenses totalling 94.34
// example viewing 1 expense totalling 98.30

// deploy

// Commit and Deploy

// Get the feature live

import React from 'react';
import {connect} from 'react-redux';
import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expensesTotal';
import numeral from 'numeral';





export const ExpenseSummary = ({expenseCount, expenseTotal}) => {

    console.log(expenseCount, expenseTotal);

    if(!expenseCount){
        return ''

    }else{

        const expTitle = expenseCount > 1 ? 'expenses' : 'expense';

        return(
            <div>
                <h3>Viewing {expenseCount} {expTitle} totaling {expenseTotal} dollars.</h3>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    const total = getExpensesTotal(visibleExpenses);

    return {
        expenseCount: visibleExpenses.length,
        expenseTotal: numeral(total / 100).format('$0,0.00')
    }

}


export default connect(mapStateToProps)(ExpenseSummary);






// export class ExpenseSummary extends React.Component {

//     getTotals = (expense) => {
//         const total = getExpensesTotal(expense)
//         return numeral(total / 100).format('$0,0.00');
//     }



//     render(){
//     console.log(this.props.expenses);
    
//         return(
            
//             <div>{this.props.expenses.length > 0 
//                     ? `Viewing ${this.props.expenses.length} totaling ${this.getTotals(this.props.expenses)}` 
//                     : ''}
//             </div>
//         )

//     }
    

// }

// const mapStateToProps = (state) => {
//     // const visibleExpenses = 
//     return {
//         expenses: selectExpenses(state.expenses, state.filters),
//     }
// }

// // const mapDispatchToProps = (dispatch) => {
// //     return {
// //     getExpensesTotal: (data) => dispatch( getExpensesTotal(data) )
// //     }
// // }

// export default connect(mapStateToProps)(ExpenseSummary);

