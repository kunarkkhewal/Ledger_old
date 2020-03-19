const express = require('express')
const mongoose = require('./database/connection'); //TODO: remove this later, it is used now to run the mongoose connection
const app = express();
const PORT = 5005;
const expensesRoute = require('./expenses/route');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', expensesRoute);

app.listen(PORT, ()=>{console.log(`Server running on Port:${PORT}`)})