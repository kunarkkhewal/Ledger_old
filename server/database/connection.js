const mongoose = require('mongoose');
const dbConfig = require('./config');

mongoose.connect(dbConfig.dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const dbConnection = mongoose.connection;
dbConnection.once('open', ()=>{
    console.log("database connection done");
})

module.exports = mongoose;