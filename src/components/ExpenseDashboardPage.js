import React from 'react'

import ExpenseList from './ExpenseList'
import ExpenseListTextFilters from './ExpenseListFilters'

const ExpenseDashboardPage = () => {
    return (
        <div>
            DashBoard
            <ExpenseListTextFilters />
            <ExpenseList />
        </div>
    )
}

export default ExpenseDashboardPage
