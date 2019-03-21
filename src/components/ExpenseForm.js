import React from 'react'

class ExpenseForm extends React.Component {

    state = { description: '', note: '', amount: '' }

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
        if (amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState({ amount })
        }
    }

    render () {
        return (
            <div>
                <form>
                    <input 
                        type="text" 
                            placeholder="Description"
                                value={this.state.description}
                                    autoFocus
                                        onChange={this.onInputChangeDescription}
                                    />
                    <input 
                        type="text"
                            placeholder="Amount"
                                value={this.state.amount}
                                    onChange={this.onInputChangeAmount}
                                />
                    <textarea
                        placeholder="Add a note for your expense"
                            onChange={this.onTextaraeChangeNote}
                                >
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}


export default ExpenseForm