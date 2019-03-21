import React from 'react'
import { connect } from 'react-redux'
import { removeExpense } from '../actions/expenses';


const ExpenseListItem = ({ id, description, amount, createdAt, removeExpenseFromRedux }) => {
    return (
        <div>
            <p>{description}...{amount}...{createdAt}</p>
            <button onClick={() => removeExpenseFromRedux(id)}>Remove</button>
        </div>
    )
}


const mapDispatchToProps = dispatch => {
    return {
        removeExpenseFromRedux: (id) => dispatch(removeExpense({ id }))
    }
}


export default connect(null, mapDispatchToProps)(ExpenseListItem)