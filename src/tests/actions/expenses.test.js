import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('Should setup REMOVE expense action object', () => {
    const action = removeExpense('9527');
    expect(action).toEqual(
        {
            type: "REMOVE_EXPENSE",
            id: '9527'
        }
    )
})

test('Should setup EDIT expense action object', () => {
    const action = editExpense('9527', { note: "add some notes" });
    expect(action).toEqual(
        {
            type: "EDIT_EXPENSE",
            id: '9527',
            updates: {
                note: "add some notes"
            }
        }
    )
})

test('Should setup ADD expense action object with provided value', () => {
    const newExpense = {
        description: "Coffee",
        amount: 475,
        createdAt: 100,
        note: "Morning coffee"
    }
    const action = addExpense(newExpense);
    expect(action).toEqual(
        {
            type: "ADD_EXPENSE",
            expense: {
                ...newExpense,
                id: expect.any(String)
            }
        }
    )
})

test('Should setup ADD expense action object without provided value', () => {
    const defaultExpense = {
        description: "",
        amount: 0,
        createdAt: 0,
        note: ""
    }

    const action = addExpense();
    expect(action).toEqual(
        {
            type: "ADD_EXPENSE",
            expense: {
                ...defaultExpense,
                id: expect.any(String)
            }
        }
    )
})