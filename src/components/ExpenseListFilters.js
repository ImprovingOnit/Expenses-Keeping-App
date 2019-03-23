import React from 'react'
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates'
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from './../actions/filters';


export class ExpenseListFilters extends React.Component {

    state = {
        calendarFocused: null
    }

    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDateOnRedux(startDate)
        this.props.setEndDateOnRedux(endDate)
        
    }

    onFocusChange = (focusedInput) => {
        this.setState({ calendarFocused: focusedInput })
    }

    render () {
        return (
            <div>
                <input 
                    type="text" 
                        value={this.props.filters.text}
                            onChange={(e) => this.props.setTextFilterOnRedux(e.target.value)} 
                />
                <select 
                    value={this.props.filters.sortBy}
                        onChange={(e) => this.props.setSortByFilterOnRedux(e.target.value)}
                            >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker 
                    startDate={this.props.filters.startDate}
                        endDate={this.props.filters.endDate}
                            onDatesChange={this.onDatesChange}
                                focusedInput={this.state.calendarFocused}
                                    onFocusChange={this.onFocusChange}
                                        numberOfMonths={1}
                                            isOutsideRange={() => false}
                                                showClearDates={true}
                />
            </div>
        )
    }
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
        },
        setStartDateOnRedux: (startDate) => dispatch(setStartDate(startDate)),
        setEndDateOnRedux: (endDate) => dispatch(setEndDate(endDate))
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)