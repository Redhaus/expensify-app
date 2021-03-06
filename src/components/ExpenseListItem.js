

// Create a stateless component with deconstructed object for individual expense items
import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';



// const ExpenseListItem = (props) => {
// destructured props object below
export const ExpenseListItem = ({id, description, amount, createdAt }) => {
        return (
                <div>
                    <h3><Link to={`/edit/${id}`}>{description}</Link></h3>
                    <p>
                        {numeral(amount / 100).format('$0,0.00')} 
                        - 
                        {moment(createdAt).format('MMMM Do, YYYY')}
                    </p>
                </div>
     //dispatch action when clicked to remove an item
    //  connect component to wire up dispatch
    // remove by id
        )
};

// const mapStateToProps = (state) => {
//     return {
//         expenses: state.expenses
//     }
// }

// export default connect(mapStateToProps)(ExpenseListItem);
export default ExpenseListItem;

