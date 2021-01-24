import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'


export const ExpenseList = (props) => (
    <div>
        {/* <h1>Expenses</h1> */}

        {
            props.expenses.length === 0 ? (
                <p>No expense</p>
            ) : (
                props.expenses.map((expense) => (
                    <ExpenseListItem {...expense} key={expense.id} />
                ))
            )
        }
        
    </div>
)

const mapStateToProps = (state) => (
    {
        expenses: selectExpenses(state.expenses, state.filters)
    }
)

export default connect(mapStateToProps)(ExpenseList);