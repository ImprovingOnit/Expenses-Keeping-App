import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { addExpense } from './../actions/expenses'

const AddExpensePage = (props) => {
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
        addExpenseToRedux: expense => dispatch(addExpense(expense))
    }
}

export default connect(null, mapDispatchToProps)(AddExpensePage)