import React from 'react'
import { connect } from 'react-redux'

import ExpenseForm from './ExpenseForm'
import { startEditExpense } from './../actions/expenses'
import { startRemoveExpense } from '../actions/expenses'

export const EditExpensePage = (props) => {
    return (
        <div>
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Edit Expense</h1>
                </div>
            </div>
            <div className="content-container">
                <ExpenseForm 
                    expense={props.expense} 
                        onFormSubmit={(update) => {
                            props.startEditExpenseOnRedux(props.expense.id, update)
                            props.history.push('/')
                        }} 
                />
                <button 
                    className="button button--secondary"
                        onClick={() => {
                            props.startRemoveExpenseFromRedux(props.expense.id)
                            props.history.push('/')
                        }}
                >
                Remove Expense
                </button>
            </div>
        </div>
    )
}

const mapStateToProps = (state,props) => {
    return {
        expense: state.expenses.find((expense) => {
            return props.match.params.id === expense.id
        })
    }
}

const mapDispacthToProps = dispatch => {
    return {
        startEditExpenseOnRedux: (id, update) => dispatch(startEditExpense(id, update)),
        startRemoveExpenseFromRedux: (id) => dispatch(startRemoveExpense({ id }))
    }
}

export default connect(mapStateToProps, mapDispacthToProps)(EditExpensePage)