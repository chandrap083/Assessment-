const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    id: String,
    date: Number,
    sender: {
        firstName: String,
        lastName: String,
        dateOfBirth: String,
        IDNumber: String
    },
    recipient: {
        firstName: String,
        lastName: String,
        email: String,
        accountNumber: String,
        bank: String
    },
    amount: Number,
    currencyCd: String,
    comments: String,
    status: String
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
