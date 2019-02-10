var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 8800



// Configue bodyParser
app.use(bodyParser.json())


// Configuring the database
const dbConfig = require('./config/mongodb.config.js');
const mongoose = require('mongoose');
 
mongoose.Promise = global.Promise;
app.use(bodyParser.json())

// Connecting to the database
mongoose.connect(dbConfig.url,{ useNewUrlParser: true })
.then(() => {
    console.log("Successfully connected to MongoDB.");    
}).catch(err => {
    console.log('Could not connect to MongoDB.');
    process.exit();
});
 
//API ROUTES
require('./routes/companies.routes.js')(app);
require('./routes/products.routes.js')(app);

// Create a Server
app.listen(port, function () { 
  console.log(`App listening at ${port}`)
})



