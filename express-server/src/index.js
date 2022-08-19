require('dotenv').config();

const express = require('express');
const app = express();

//Use json and urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//ENV
require('dotenv').config();

//CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const rateLimiter = require("express-rate-limit");

//Rate limit for the whole application w. max 100 req
app.use("/", rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100
}));

//ROUTES
const personRoute = require('./routes/person');
app.use('/api/person', personRoute);

const facilityRoute = require('./routes/facility');
app.use('/api/facility', facilityRoute);

const exposureRoute = require('./routes/exposure');
app.use('/api/exposure', exposureRoute);

const server = app.listen(process.env.PORT || '8080', (error) => {
    if (error) {
        console.log("There is an error running on the server " + error);
    }
    console.log("Server is running on port 8080");
})