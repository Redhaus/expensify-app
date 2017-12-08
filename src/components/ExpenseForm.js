import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';



class ExpenseForm extends React.Component {

   constructor(props) {
       super(props);

       const exp = props.expense;

       this.state = {
        description: exp ? exp.description : '',
        note: exp ? exp.note : '',
        amount: exp ? (exp.amount / 100).toString() : '',
        createdAt: exp ? moment(exp.createdAt) : moment(),
        calFocused: false,
        error: ''

    }
       
   }
   
    
    

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState( (state) => ({description: description}) )

    }

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState( (state) => ({note: note}))
    }

    onAmountChange = (e) => {

        // match function makes sure var matches regular expression
        // regular exp says only digets as many as you want, 
        // then a decimal and 2 more digits are optional
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
         this.setState((state) => ({amount: amount}))
        
        }


    }

    handleOnSubmit = (e) => {
        e.preventDefault();

        const description = this.state.description;
        const amount = this.state.amount;
        const note = this.state.note;
        const createdAt = this.state.createdAt;

        if(!description || !amount){
            //Set Error State equal to please provide date and amount
            this.setState( () => ({ error: 'Please Provide Date and Amount'}))
        }else{
            console.log('submitted');
            this.setState( () => ({ error: ''}))

            // use onSubmit prop function and pass in state data
            this.props.onSubmit({

                description: description,
                amount: parseFloat(amount, 10) * 100,
                createdAt: createdAt.valueOf(),
                note: note

            })
            
        }

        

    }

    onDateChange = (selecteddate) => {
        if (selecteddate){
        this.setState( () => ({createdAt: selecteddate}))
        }
    }

    onFocusChange = ( {focused}) => {
        this.setState( () => ({ calFocused: focused }))
    }

    render(){
        return (
            <div>
                Expense Form
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleOnSubmit}>
                <input 
                    type="text" 
                    name="description"
                    placeholder="Description"
                    autoFocus
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                />
                <input 
                    type="text"
                    placeholder="Amount"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                />
                <SingleDatePicker 
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={ () => false }
                
                />

                <textarea 
                    placeholder="Add note for expense..."
                    value={this.state.note}
                    onChange={this.onNoteChange}
                    
                >
                </textarea>
                <button type="submit">{this.props.expense ? 'Update Expense' : 'Add Expense' }</button>
                </form>

            </div>
        )
    }
}

export default ExpenseForm;