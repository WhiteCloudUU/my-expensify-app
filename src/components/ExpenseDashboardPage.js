import React from 'react';
import { Link } from 'react-router-dom';
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'

const ExpenseDashboardPage = () => (
    <div>
        Expense dashboard

        <Link to='edit/42'>Expense 42</Link>
        <Link to='edit/1024'>Expense 1024</Link>
        <ExpenseListFilters />
        <ExpenseList />
    </div>

);

export default ExpenseDashboardPage;