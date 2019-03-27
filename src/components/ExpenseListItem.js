import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'



export const ExpenseListItem = ({ id, description, amount, createdAt }) => {
    return (
        <Link 
            to={`/edit/${id}`}
                className="list-item"
        >
            <div>
                <h2 className="list-item__title">{description}</h2>
                <span className="list-item__sub-title">{moment(createdAt).format('MMMM Do, YY')}</span>
            </div>
            <h2 className="list-item__data">
                {numeral(amount / 100).format('$0,0.00')}
            </h2>
        </Link>
    )
}



export default ExpenseListItem