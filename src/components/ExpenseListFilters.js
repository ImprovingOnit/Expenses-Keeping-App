import React from 'react'
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount } from './../actions/filters';

const ExpenseListFilters = (props) => {

    return (
        <div>
            <input 
                type="text" 
                    value={props.filters.text}
                        onChange={(e) => props.setTextFilterOnRedux(e.target.value)} 
                            />
            <select 
                value={props.filters.sortBy}
                    onChange={(e) => props.setSortByFilterOnRedux(e.target.value)}
                        >
                <option value="date">Date</option>
                <option value="amount">Amount</option>
            </select>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        filters: state.filters
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setTextFilterOnRedux: (text) => dispatch(setTextFilter(text)),
        setSortByFilterOnRedux: (sortByValue) => {
            if (sortByValue === 'date') {
                return dispatch(sortByDate())
            } else {
                return dispatch(sortByAmount())
            }
        }
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)