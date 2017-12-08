import moment from 'moment';
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
        const createdAtMoment = moment(expense.createdAt)

        // set up a expense description to lowercase and assign as var
        const description = expense.description.toLowerCase();
        // set search term to lower case for comparison
        const search = text.toLowerCase();
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
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


export default getVisibleExpenses