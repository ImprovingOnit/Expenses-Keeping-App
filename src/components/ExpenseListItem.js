import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'



export const ExpenseListItem = ({ id, description, amount, createdAt }) => {
    return (
        <div>
            <p>
                <Link 
                    to={`/edit/${id}`}
                >
                    <h2>{description}</h2>
                </Link>
                amount {numeral(amount / 100).format('$0,0.00')}
                <br/>
                ... 
                <br/>
                {moment(createdAt).format('MMMM Do, YY')}
            </p>
        </div>
    )
}



export default ExpenseListItem