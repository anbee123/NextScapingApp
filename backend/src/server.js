const express = require('express');
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json()); //or use body-parser middleware to parse the JSON body from HTTP request

// Route
app.get('/api', (req, res) => {
    res.json('api for scaping data');
    return
})

module.exports = app;
