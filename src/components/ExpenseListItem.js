import React from 'react'


const ExpenseListItem = ({ description, amount, createdAt }) => {
    return (
        <div>
            <p>{description}...{amount}...{createdAt}</p>
        </div>
    )
}


export default ExpenseListItem