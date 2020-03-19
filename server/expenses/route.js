const express = require("express");
const router = express.Router();

const expensesController = require('./controller');

// router.use(function timeLog(req, res, next) {
//     console.log("Time: ", Date.now());
//     next();
// });

router.get("/", function(req, res) {
    expensesController.getExpenses();
    res.send("get route");
});

router.post("/", function(req, res) {
    console.log(" -------- post request req => ", req.body)
    //res.send("post route");
});

module.exports = router;
