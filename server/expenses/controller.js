const expenses = require('./model'); //Model import

const getExpenses = () => {
    return "getExpenses"
}

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