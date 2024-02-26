const cors = require("cors");
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const createError = require("http-errors");

// create express app
const app = express();

// Required Route
const employeeRoutes = require('./routes/employee-route')

// Middleware
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())

// cors
app.use(cors({ origin: true, credentials: true }));

// define a Test route
app.get('/', (req, res) => {
  res.send("Hello Shashi ");
});

// use Routes
app.use('/api', employeeRoutes)

// Connect Database
connectDB();

// 404 Error
app.use((req, res, next) => {
  next(createError(404));
});
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

// Setup server port
const port = process.env.PORT || 4000;
// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});