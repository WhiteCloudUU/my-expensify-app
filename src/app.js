import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter, { history } from './routers/AppRouter'
import configStore from './store/configStore'
import { startSetExpenses } from './actions/expenses'
import { login, logout } from './actions/auth'


import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css'
import { firebase } from './firebase/firebase'

import LoadingPage from './components/LoadingPage'


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

let hasRendered = false;
const renderApp = () => {
    if(!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
}

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

// firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//         console.log("Log in.");
//         store.dispatch(login(user.uid));
//         store.dispatch(startSetExpenses())
//             .then(() => {
//                 renderApp();
//                 if (history.location.pathname === '/'){
//                     history.push('/dashboard');
//                 }
//             });
//     } else {
//         store.dispatch(logout());
//         console.log("Log out.");
//         renderApp();
//         history.push('/');
//     }
// });