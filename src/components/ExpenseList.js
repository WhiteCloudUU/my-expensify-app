import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'


export const ExpenseList = (props) => (
    <div className="content-container">
      
        <div className="list-header">
            <div className="show-for-mobile">Expense</div>
            <div className="show-for-desktop">Expenses</div>
            <div className="show-for-desktop">Amount</div>
        </div>  

        <div className="list-body">
            {
                props.expenses.length === 0 ? (
                    <div className="list-item list-item--message">
                        <span>No expense</span>
                    </div>
                ) : (
                    props.expenses.map((expense) => (
                        <ExpenseListItem {...expense} key={expense.id} />
                    ))
                )
            }
        </div>
        
        
    </div>
)

const mapStateToProps = (state) => (
    {
        expenses: selectExpenses(state.expenses, state.filters)
    }
)

export default connect(mapStateToProps)(ExpenseList);