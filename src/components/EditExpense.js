



///
import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense } from '../actions/expenses';
import { removeExpense } from '../actions/expenses'


// refactor to be class based component
// setup map dispatch to props for editExpense and removeExpense

//should render editExpense Page with snapshot
//should handle editExpense using spies
// should handle remove expense using spies 

export class EditPage extends React.Component{

    handleRemoveExpense = () => {
        // this.props.dispatch( removeExpense({ id: this.props.expense.id}) )
        this.props.removeExpense({ id: this.props.expense.id}) 
        this.props.history.push('/');
        
    }

    onSubmit = (expense) => {
        this.props.editExpense( this.props.expense.id, expense );
        this.props.history.push('/');

    }

    render(){
        return(
            <div>
            <ExpenseForm 
                expense={this.props.expense}
                onSubmit={ this.onSubmit }
            />
             <button onClick={this.handleRemoveExpense}>Remove</button>
             </div>  
        )
    }

}


// you can pass state and props to mapStateToProps
// since you have the id of the individual expense page we are on 
// from the array 

const mapStateToProps = (state, props) => {
    const id = props.match.params.id;
    return {
        expense: state.expenses.find( (expense) => {
            return expense.id === id;
        })
    }

}

const mapDispatchToProps = (dispatch, props) => {
    return {
        removeExpense: (data) => dispatch( removeExpense({ data }) ),
        editExpense: (id, expense) =>  dispatch( editExpense( id, expense ))

    }

}

export default connect(mapStateToProps, mapDispatchToProps)(EditPage);