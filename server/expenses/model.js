const mongoose = require('../database/connection');
let categoryType=['Necessity', 'Investment', 'Wanting']
let moneyType=['money-going', 'money-coming']

const Schema = mongoose.Schema;
const expensesSchema = new Schema({
    description: {type: String},
    amount: {type: String, required: true},
    category: {type: String, enum:categoryType},
    moneyType: {type: String, enum:moneyType},
    createdAt: {type: Date, default: Date.now}, 
});

const expensesModel = mongoose.model('Expenses', expensesSchema);

module.exports = expensesModel;