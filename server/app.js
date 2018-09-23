const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 9000;

app.use(bodyParser.json());

Mexico = require('./models/mexico');

// Connect to Mongoose
mongoose.connect('mongodb://mongodb:27017/mexico');
var db = mongoose.connection;

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/max', (req, res) => {
    Mexico.getMaxIncome((err, income) => {
        if(err) {
            throw err;
        }

        res.json({income: income});
    });
});

app.post('/min', (req, res) => {
    Mexico.getMinIncome((err, income) => {
        if(err) {
            throw err;
        }

        res.json({income: income});
    });
});

app.post('/average', (req, res) => {
    Mexico.getAverageIncome((err, income) => {
        if(err) {
            throw err;
        }

        res.json({income: income});
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));