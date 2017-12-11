import expenses from '../fixtures/expenses';
import getExpensesTotal from '../../selectors/expensesTotal';


test('ADD NO EXPENSES', () => {
    const result = getExpensesTotal();
    expect(result).toBe(0);
})

test('ADD ALL EXPENSES', () => {
    const result = getExpensesTotal(expenses);
    expect(result).toBe(2001);
})

test('ADD SINGLE EXPENSE', () => {
    const expenses = [{
        id: '1',
        description: 'Gum',
        note: '',
        amount: 101,
        createdAt: 0
    }]
    const result = getExpensesTotal(expenses);
    expect(result).toBe(101);
})
