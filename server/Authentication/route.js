const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');

router.post("/", async (req, res) => {
    console.log(" ----------- req.body => ", req.body)
    let credentials = req.body;
    let token = jwt.sign(credentials, 'secret');
    // const response = await expensesController.addExpenses(req.body);
    res.send("working");
});

module.exports = router;