import React from 'react'
import { Link } from 'react-router-dom'



export const ExpenseListItem = ({ id, description, amount, createdAt }) => {
    return (
        <div>
            <p><Link to={`/edit/${id}`}>{description}</Link>...amount {amount}... createdAt {createdAt}</p>
        </div>
    )
}



export default ExpenseListItem