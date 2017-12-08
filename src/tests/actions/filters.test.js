import {setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate} from '../../actions/filters';
import moment from 'moment';

test('should generate start date action', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        date: moment(0)
    })

})

test('should generate end date action', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        date: moment(0)
    })

})

test('SET TEXT FILTER TEST', () => {
    const action = setTextFilter('Bill');
    expect(action).toEqual({
        type: 'SET_TEXT',
        text: 'Bill'

    })
})

test('SET TEXT FILTER DEFAULT', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT',
        text: ''
    })
})

test('SORT BY AMOUNT', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_AMOUNT',
        sort: 'amount'
    })
})

test('SORT BY DATE', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_DATE',
        sort: 'date'
    })
})