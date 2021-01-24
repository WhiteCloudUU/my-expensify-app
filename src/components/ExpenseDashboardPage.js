import React from 'react';
import { Link } from 'react-router-dom';
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'
import ExpenseSummary from './ExpenseSummary'

const ExpenseDashboardPage = () => (
    <div>
        Expense dashboard

        <ExpenseSummary />
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;