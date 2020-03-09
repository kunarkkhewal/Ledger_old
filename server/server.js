const express = require('express')
const mongoose = require('./database/connection'); //TODO: remove this later, it is used now to run the mongoose connection
const app = express();
const PORT = 5000;
const expensesRoute = require('./expenses/route');

app.use('/', expensesRoute);

app.listen(PORT, ()=>{console.log(`Server running on Port:${PORT}`)})