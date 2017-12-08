import filterReducer from '../../reducers/filters';
import moment from 'moment';

// testing default state for filter reducer

test('SETUP DEFAULT FILTER VALUES', () =>  {
    const state = filterReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual({
        text:'',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})


test('SET SORT BY AMOUNT', () => {
    const action = {type: 'SORT_AMOUNT', sort:'amount'}
    const state = filterReducer( undefined, action );
    expect(state.sortBy).toBe('amount');
})

test('SET SORT BY DATE', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }

    const action = {type: 'SORT_DATE', sort:'date'}
    const state = filterReducer(currentState, action);
    expect(state.sortBy).toBe('date');
})

// should set text filter
test('SET TEXT FILTER', () => {
    const action = {type: 'SET_TEXT', text: 'gas'}
    const state = filterReducer(undefined, action)
    expect(state.text).toBe('gas');
})

// SET START DATE FILTER

test('SET STATE DATE FILTER', () => {
    const startDate = moment();
    const action = { type: 'SET_START_DATE', date: startDate };
    const state = filterReducer( undefined, action);
    expect(state.startDate).toEqual(startDate);
})

// SET END DATE FILTER 
test('SET END DATE FILTER', () => {
    const endDate = moment();
    const action = { type: 'SET_END_DATE', date: endDate}
    const state = filterReducer( undefined, action )
    expect(state.endDate).toEqual(endDate)
})
