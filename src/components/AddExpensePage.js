import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { startAddExpense } from './../actions/expenses'

export const AddExpensePage = (props) => {
    return (
        <div>
            <h1>AddExpense</h1>
            <ExpenseForm 
                onFormSubmit={(expense) => {
                    props.addExpenseToRedux(expense)
                    props.history.push('/')
                }}
            />
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addExpenseToRedux: expense => dispatch(startAddExpense(expense))
    }
}

export default connect(null, mapDispatchToProps)(AddExpensePage)