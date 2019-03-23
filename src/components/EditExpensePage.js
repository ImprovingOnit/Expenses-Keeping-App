import React from 'react'
import { connect } from 'react-redux'

import ExpenseForm from './ExpenseForm'
import { editExpense } from './../actions/expenses'
import { removeExpense } from '../actions/expenses'




export const EditExpensePage = (props) => {
    return (
        <div>
            <ExpenseForm 
                expense={props.expense} 
                    onFormSubmit={(update) => {
                        props.editExpenseOnRedux(props.expense.id, update)
                        props.history.push('/')
                    }} 
            />
            <button 
                onClick={() => {
                    props.removeExpenseFromRedux(props.expense.id)
                    props.history.push('/')
                }}>
                Remove
            </button>
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
        editExpenseOnRedux: (id, update) => dispatch(editExpense(id, update)),
        removeExpenseFromRedux: (id) => dispatch(removeExpense({ id }))
    }
}

export default connect(mapStateToProps, mapDispacthToProps)(EditExpensePage)