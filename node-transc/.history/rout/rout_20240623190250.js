const express = require('express');
const router = express.Router();
const Transaction = require('../models/transaction');

router.get('/', async (req, res) => {
    const { startDate, endDate } = req.query;
    try {
        const transactions = await Transaction.find({
            date: { $gte: new Date(startDate).getTime(), $lte: new Date(endDate).getTime() },
            status: { $in: ["COMPLETED", "IN PROGRESS", "REJECTED"] }
        }).sort({ date: 1 });
        res.json(transactions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
