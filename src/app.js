import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configStore from './store/configStore'
import { addExpense, editExpense, removeExpense } from './actions/expenses'
import { setTextFilter} from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css'

const store = configStore();

const expenseOne = store.dispatch(addExpense(
    {
        description: "Water bill",
        amount: 1500,
        createdAt: 100
    }
));

const expenseTwo = store.dispatch(addExpense(
    {
        description: "Gas bill",
        amount: 1000,
        createdAt: 101
    }
));

const expenseThree = store.dispatch(addExpense(
    {
        description: "Rent",
        amount: 130000,
        createdAt: 102
    }
));

// expenseOne.amount = 1700;
// store.dispatch(editExpense(expenseOne.expense.id, expenseOne));

// store.dispatch(removeExpense({id: expenseOne.expense.id}));
// store.dispatch(setTextFilter('bill'))
// const state = store.getState();
// console.log(getVisibleExpenses(state.expenses, state.filters));
// console.log(state);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));
