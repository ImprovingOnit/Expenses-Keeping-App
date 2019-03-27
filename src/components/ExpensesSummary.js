import React  from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import numeral from 'numeral'
import expensesTotal from '../selectors/expenses-total'
import selectExpense from '../selectors/expenses'

export const ExpensesSummary = (props) => {
    return (
        <div className="page-header">
            <div className="content-container">
                {
                props.expenseCount <= 1 ? (
                    <h1 className="page-header__title">Viewing <span>{props.expenseCount}</span> expense totalling <span>{numeral(props.expensesTotal / 100).format('$0,0.00')}</span></h1>
                    ) : (
                    <h1 className="page-header__title">Viewing <span>{props.expenseCount}</span> expenses totalling <span>{numeral(props.expensesTotal / 100).format('$0,0.00')}</span></h1>
                    )
                }
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    const visibleExpenses = selectExpense(state.expenses, state.filters)
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: expensesTotal(visibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpensesSummary)