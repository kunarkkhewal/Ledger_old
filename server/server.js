const express = require('express')
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