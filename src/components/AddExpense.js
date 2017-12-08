import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import { addExpense } from '../actions/expenses';


export class AddExpensePage extends React.Component {

    onSubmit = (expense)=> {
        // props.dispatch( addExpense(expense));
        this.props.addExpense(expense);
        this.props.history.push('/');
    }

    render() {
        return (
        <div>
        <h3>Add Expense</h3>
        <ExpenseForm 
            onSubmit={ this.onSubmit } 
        />
    </div>
    )
    }
}

//create onSubmit prop unction to be passed down that passes expense object state data passed up to it.
//call the props dispatch after connecting component and call addExpense func and pass it expense 


const mapDispatchToProps = (dispatch)  => {
    return {
        addExpense: (expense) => dispatch(addExpense(expense))
    };
};

export default connect(undefined, mapDispatchToProps)(AddExpensePage);






// WORKING VERSION 
// import React from 'react';
// import ExpenseForm from './ExpenseForm';



// import { connect } from 'react-redux';
// import { addExpense } from '../actions/expenses';


// const AddExpensePage = (props) => {


//     const handleAddExpense = (e) => {
//         e.preventDefault();
//         const description = e.target.description.value;
//         const amount = e.target.amount.value;
//         const date = e.target.date.value;
//         const note = e.target.note.value
//         props.dispatch( addExpense({
//             description: description, 
//             amount: amount, 
//             date: date,
//             note: note
//         }));

//         e.target.description.value = '';
//         e.target.amount.value = '';
//         e.target.date.value = '';
//         e.target.note.value = '';
//     }

//     return (
//     <div>
//         <h3>Add Expense</h3>
//         <form onSubmit={handleAddExpense}>
        
//         <div>
//         <label>Description</label>
//         <input type="text" name="description"/>
//         </div>

//         <div>
//         <label>Amount</label>
//         <input type="text" name="amount"/>
//         </div>
        
//         <div>
//         <label>Date</label>
//         <input type="text" name="date"/>
//         </div>
        
//         <div>
//         <label>Note</label>
//         <input type="textarea" name="note"/>
//         </div>

//         <button type="submit">Add Expense</button>
//         </form>
//     </div>
//     )
// }



// export default connect()(AddExpensePage);