import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configStore from './store/configStore'
import { startSetExpenses } from './actions/expenses'
import { setTextFilter} from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css'

import './firebase/firebase'

const store = configStore();

// const expenseOne = store.dispatch(addExpense(
//     {
//         description: "Water bill",
//         amount: 1500,
//         createdAt: 100
//     }
// ));

// const expenseTwo = store.dispatch(addExpense(
//     {
//         description: "Gas bill",
//         amount: 1000,
//         createdAt: 101
//     }
// ));

// const expenseThree = store.dispatch(addExpense(
//     {
//         description: "Rent",
//         amount: 130000,
//         createdAt: 102
//     }
// ));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
});
