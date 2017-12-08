
// SET_TEXT_FILTER

export const setTextFilter = ( text = '') => ({
    type: 'SET_TEXT',
    text: text


})



// SORT_BY_DATE
export const sortByDate = () => ({
    type: 'SORT_DATE',
    sort: 'date'
})


// SORT_BY_AMOUNT
export const sortByAmount = () => ({
    type: 'SORT_AMOUNT',
    sort: 'amount'
})


// SET_START_DATE

export const setStartDate = (date = undefined) => ({
    type: 'SET_START_DATE',
    date: date
})

// SET_END_DATE
export const setEndDate = (date = undefined) => ({
    type: 'SET_END_DATE',
    date: date

})