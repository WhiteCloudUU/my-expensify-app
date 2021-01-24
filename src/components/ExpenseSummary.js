import React from 'react'
import numeral from 'numeral'
import { connect } from 'react-redux'
import getExpenseTotal from '../selectors/expenses-total'
import selectExpenses from '../selectors/expenses'


export const ExpenseSummary = ({expensesCount, expensesTotal}) => {
    
    return (
        <div>
            <h1>
                Viewing {expensesCount} expenses, 
                totaling at {numeral(expensesTotal / 100).format('$0,00.00')}.
            </h1>
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
