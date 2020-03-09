const mongoose = require('../database/connection');
let categoryType=['Necessity', 'Investment', 'Wanting']

const Schema = mongoose.Schema;
const expensesSchema = new Schema({
    description: {type: String, required: true},
    amount: {type: String, required: true},
    category: {type: String, enum:categoryType},
    createdAt: {type: Date, default: Date.now}, 
});

const expensesModel = mongoose.model('Expenses', expensesSchema);

module.exports = expensesModel;