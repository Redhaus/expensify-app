
import moment from 'moment';

// Dummy Data for testing
const expenses = [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 101,
    createdAt: 0
}, {
    id: '2',
    description: 'Rent',
    note: '',
    amount: 1000,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    description: 'Foodie',
    note: '',
    amount: 900,
    createdAt: moment(0).add(4, 'days').valueOf()
}]

export default expenses;