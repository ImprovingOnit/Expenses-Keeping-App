import React from 'react'
import { connect } from 'react-redux';
import { setTextFilter } from './../actions/filters';

const ExpenseListFilters = (props) => {

    return (
        <div>
            <input 
                type="text" 
                    onChange={(e) => props.setTextFilterOnRedux(e.target.value)} 
                        value={props.filters.text}/>
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
        setTextFilterOnRedux: (text) => dispatch(setTextFilter(text))
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)