
// REDUCERS


// default setup for initial value of state
const expensesReducerDefaultState = []

// Expenses Reducer
// reducer accepts state you define and action 
// Add_expense will return new array of existing state plus expense from action function

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type){
        case 'ADD_EXPENSE':
            return [...state, action.expense]
//filter through every item in array, if items id, does not = action expense id 
// keep it in the array, if it matches remove item in array
        case 'REMOVE_EXPENSE':
            // console.log(action.expense.id);
            return state.filter( (item) => item.id !== action.id )
        case 'EDIT_EXPENSE':
            ///map through every item in state
            // if item.id matches the action.id 
            // spread out item with match id overwrite with updates 
            return state.map( (item) => {
                if(item.id === action.id){
                    return {
                        ...item, 
                        ...action.updates
                        
                    }

                }else{
                    return item
                }
            } )
        default:
            return state;
    }
}

export default expensesReducer;