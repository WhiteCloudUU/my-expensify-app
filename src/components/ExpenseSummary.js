import React from 'react'
import numeral from 'numeral'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import getExpenseTotal from '../selectors/expenses-total'
import selectExpenses from '../selectors/expenses'

export const ExpenseSummary = ({expensesCount, expensesTotal}) => {
    
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">
                        Viewing <span>{expensesCount}</span> expenses, 
                        totaling at <span>{numeral(expensesTotal / 100).format('$0,00.00')}</span>.
                </h1>

                <div className="page-header__action">
                    <Link className="button" to="/create">
                        Add Expense
                    </Link>
                </div> 
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);

    return {
        expensesCount: visibleExpenses.length,
        expensesTotal: getExpenseTotal(visibleExpenses)
    }
};

export default connect(mapStateToProps)(ExpenseSummary)
