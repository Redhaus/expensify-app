import expenses from '../tests/fixtures/expenses';


const getSum = (total, num) => {
    return total + num;
}


const getExpensesTotal = (expenses = []) => {
    
    return expenses
       .map( (expense) => expense.amount)
       .reduce(getSum, 0);
    
    }
    
export default getExpensesTotal;



// export const getExpensesTotal = (expenses ) => {


//     const amounts = expenses.map( (expense) => {
//         return expense.amount;
//     });

//     return amounts.length ? amounts.reduce(getSum) : 0;

// }

// const total = getExpensesTotal(expenses);
// console.log(total);


// // ADD TOTAL SELECTOR///////////

// create total expenses selector file
// create total expenses test file


// How it works
// const total = getExpensesTotal(expenses)
// console.log(total) /// all expenses totals added up


// test cases 
// Should return 0 for no expenses
// should corectly add up single expense
// should add up multiple expense


// Use map and reduce functions 
// reduce adds up numberes in array of object