import React from 'react'
import { connect } from 'react-redux'

import ExpenseForm from './ExpenseForm'
import { editExpense } from './../actions/expenses'
import { startRemoveExpense } from '../actions/expenses'




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
                    props.startRemoveExpenseFromRedux(props.expense.id)
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
        startRemoveExpenseFromRedux: (id) => dispatch(startRemoveExpense({ id }))
    }
}

export default connect(mapStateToProps, mapDispacthToProps)(EditExpensePage)