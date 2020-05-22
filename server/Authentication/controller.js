const user = require('./model'); //Model import

// const getExpenses = () => {
//     const expensesData = expenses.find()
//     return expensesData;
// }

const addExpenses = async expense => {
    const expensesData = new expenses({
        amount: expense.amount,
        description: expense.remark,
        moneyType: expense.type
    })

    const response = await expensesData.save();
    
    return response;
}

module.exports = {getExpenses, addExpenses}