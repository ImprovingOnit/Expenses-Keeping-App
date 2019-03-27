import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { startAddExpense } from './../actions/expenses'

export const AddExpensePage = (props) => {
    return (
        <div>
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">AddExpense</h1>
                </div>
            </div>
            <div className="content-container">
                <ExpenseForm 
                    onFormSubmit={(expense) => {
                        props.addExpenseToRedux(expense)
                        props.history.push('/')
                    }}
                />
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addExpenseToRedux: expense => dispatch(startAddExpense(expense))
    }
}

export default connect(null, mapDispatchToProps)(AddExpensePage)