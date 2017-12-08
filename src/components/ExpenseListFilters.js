// import React from 'react';
// import { connect } from 'react-redux';
// import {DateRangePicker} from 'react-dates';
// import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters'


// //set the value of the text into to the store value fo the filter.text 
// // on change update the store filter text value by making a dispatch call, 
// // to setTextFilter and setting it to the new value in the input

// class ExpenseListFilters extends React.Component  {



//     state = {
//         calendarFocused: null,

        
//     }

  

//     handleInput = (e) => {
//         this.props.dispatch(setTextFilter(e.target.value))
//     }

//     handleSort = (e) => {
//         if (e.target.value === 'date'){
//             this.props.dispatch(sortByDate());

//         }else if (e.target.value === 'amount'){
//             this.props.dispatch(sortByAmount());
//         }
//     }

//     onDatesChange = ({startDate, endDate}) => {
//         this.props.dispatch(setStartDate(startDate));
//         this.props.dispatch(setEndDate(endDate))
        

//     }

//     onFocusChange = (calendarFocused) => {
//         this.setState( () => ({ calendarFocused: calendarFocused }))
//     }
    
//     render() {
//     return (
//         <div>
//             <input type="text" value={this.props.filter.text} onChange={ this.handleInput }/>
//             <select name="SortBy" id="Sort" value={this.props.filter.sortBy} onChange={ this.handleSort }>
//                 <option value="date">Date</option>
//                 <option value="amount">Amount</option>     
//             </select>

//             <DateRangePicker
//                 startDate={this.props.filter.startDate}
//                 endDate={this.props.filter.endDate}
//                 onDatesChange={this.onDatesChange}
//                 focusedInput={this.state.calendarFocused}
//                 onFocusChange={this.onFocusChange}
//                 showClearDates={true}
//                 numberOfMonths={1}
//                 isOutsideRange={() => false}
            
//             />


//         </div>
//     )
// }
// }
// // set up value and on change for select




// const mapStateToProps = (state) => {
//     return {
//         filter: state.filter
//     }
// }

// export default connect(mapStateToProps)(ExpenseListFilters);


import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  }
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };
  onSortChange = (e) => {
    if (e.target.value === 'date') {
      this.props.sortByDate();
    } else if (e.target.value === 'amount') {
      this.props.sortByAmount();
    }
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={this.onTextChange}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={this.onSortChange}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
