import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { addExpense, editExpense, removeExpense, startAddExpense } from '../../actions/expenses'

const createMockStore = configureMockStore([thunk]);

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
    const expense = {
        description: "Coffee",
        amount: 475,
        createdAt: 100,
        note: "Morning coffee",
        id: 'Firebase will set this id for u'
    }
    const action = addExpense(expense);
    expect(action).toEqual(
        {
            type: "ADD_EXPENSE",
            expense
        }
    )
});


test('should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
      description: 'Mouse',
      amount: 3000,
      note: 'This one is better',
      createdAt: 1000
    };
  
    store.dispatch(startAddExpense(expenseData)).then(() => {
      expect(1).toBe(2);
      
    });
    // store.dispatch(addExpense(expenseData));
});



// Don't have to test addExpense(...) without input
// test('Should setup ADD expense action object without provided value', () => {
//     const defaultExpense = {
//         description: "",
//         amount: 0,
//         createdAt: 0,
//         note: ""
//     }

//     const action = addExpense();
//     expect(action).toEqual(
//         {
//             type: "ADD_EXPENSE",
//             expense: {
//                 ...defaultExpense,
//                 id: expect.any(String)
//             }
//         }
//     )
// })