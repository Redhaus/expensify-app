import moment from 'moment';
// Filter reducer set up default State for that reducer
const filterDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'), 
    endDate: moment().endOf('month')
}
// Filters Reducer
const filterReducer = (state = filterDefaultState, action) => {

    switch (action.type) {
        case 'SET_TEXT':
            return { ...state, text: action.text }
        case 'SORT_DATE':
            return { ...state, sortBy: action.sort}
        case 'SORT_AMOUNT':
            return { ...state, sortBy: action.sort}
        case 'SET_START_DATE':
            return { ...state, startDate: action.date}
        case 'SET_END_DATE':
            return { ...state, endDate: action.date}
            
        default:
            return state;
    }

}

export default filterReducer;