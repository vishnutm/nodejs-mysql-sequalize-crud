require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};


// Connection of Databse 

const db = require('./config/dbconnection')

// Test DB

db.authenticate().then(() => console.log('Database connected'))
    .catch(error => console.log('Database Connection error', error))

// Tables created if not existing...
db.sync()

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const userRouter = require('./router/user')
app.use("/",userRouter)
// simple route


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});