export default (expenses) => {
    return expenses.map(expense => {
        return expense.amount
    }).reduce((tol, cur) => {
        return tol + cur
    }, 0)
}