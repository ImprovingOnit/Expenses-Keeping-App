import React  from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'
import expensesTotal from '../selectors/expenses-total'
import selectExpense from '../selectors/expenses'

export const ExpensesSummary = (props) => {
    return (
        <div>
            {
            props.expenseCount <= 1 ? (
                <h1>Viewing {props.expenseCount} expense totalling {numeral(props.expensesTotal / 100).format('$0,0.00')}</h1>
                ) : (
                <h1>Viewing {props.expenseCount} expenses totalling {numeral(props.expensesTotal / 100).format('$0,0.00')}</h1>
                )
            }
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