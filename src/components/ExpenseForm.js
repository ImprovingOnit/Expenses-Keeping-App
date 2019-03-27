import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'

class ExpenseForm extends React.Component {

    state = { 
        description: this.props.expense ? this.props.expense.description : '',
        note: this.props.expense ? this.props.expense.note : '',
        amount: this.props.expense ? (this.props.expense.amount / 100).toString() : '',
        createdAt: this.props.expense ? moment(this.props.expense.createdAt) : moment(),
        calendarFocused: false,
        error: ''
    }

    onInputChangeDescription = (e) => {
        const description = e.target.value
        this.setState({ description })
    }

    onTextaraeChangeNote = (e) => {
        const note = e.target.value
        this.setState({ note})
    }

    onInputChangeAmount = (e) => {
        const amount = e.target.value
        if (!amount || amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState({ amount })
        }
    }

    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState({ createdAt })
        }
    }

    onFocusChange = ({ focused }) => {
        this.setState({ calendarFocused: focused })
    }

    onFormSubmit = (e) => {
        e.preventDefault()

        if (!this.state.description || !this.state.amount) {
            this.setState({ error: 'Please provide description and amount' })
        } else {
            this.setState({ error: '' })
            this.props.onFormSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }

    render () {
        return (
            <form className="form" onSubmit={this.onFormSubmit}>
                {this.state.error && <p className="form__error">{this.state.error}</p>} 
                <input 
                    type="text" 
                        placeholder="Description"
                            value={this.state.description}
                                autoFocus
                                    onChange={this.onInputChangeDescription}
                                        className="text-input"
                />
                <input 
                    type="text"
                        placeholder="Amount"
                            value={this.state.amount}
                                onChange={this.onInputChangeAmount}
                                    className="text-input"
                />
                <SingleDatePicker 
                    date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                            focused={this.state.calendarFocused}
                                onFocusChange={this.onFocusChange}
                                    numberOfMonths={1}
                                        isOutsideRange={() => false}
                />
                <textarea
                    placeholder="Add a note for your expense"
                        onChange={this.onTextaraeChangeNote}
                            className="textarea"
                >
                </textarea>
                <div>
                    <button className="button">{this.props.expense ? 'Edit Expense' : 'Add Expense'}</button>
                </div>
            </form>
        )
    }
}


export default ExpenseForm