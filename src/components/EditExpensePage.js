import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { startEditExpense, startRemoveExpense } from '../actions/expenses'

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push("/");
    }

    onClick = () => {
        this.props.startRemoveExpense(this.props.expense.id);
        this.props.history.push("/");
    }

    render () {
        // console.log(this.props);
        return (
            <div>

                <div className="page-header">
                    <div className="content-container">
                        <h1>Edit expense</h1>
                    </div>
                </div>

                <div className="content-container">
                    <ExpenseForm 
                        expense={this.props.expense}
                        onSubmit={this.onSubmit}
                    />

                    <button className="button button--second" onClick={this.onClick}>
                        Remove Expense
                    </button>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = (state, props) => (
    {
        expense: state.expenses.find(({ id }) => id === props.match.params.id)
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
        startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);